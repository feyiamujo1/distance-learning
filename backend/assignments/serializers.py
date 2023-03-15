from rest_framework import serializers
from .models import Assignment, Solution
from students.serializers import StudentProfileInlineSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class AssignmentSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='assignment-detail',
            lookup_field='pk', read_only=True)
    # given_to = serializers.StringRelatedField()
    # given_by = serializers.StringRelatedField()
            
    class Meta:
        model = Assignment
        fields = ('url', 'given_by', 'title', 'body', 'attachment', 
        'given_to', 'given_on', 'deadline')

class AssignmentDetailSerializer(serializers.ModelSerializer):
    given_by = serializers.StringRelatedField()
    given_to = serializers.StringRelatedField()

    class Meta:
        model = Assignment
        fields = ('id', 'given_by', 'title', 'body', 'attachment', 
        'given_to', 'given_on', 'deadline')

class UserProfileField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id':value.pk, 'user name': f"{value.user.firstname} {value.user.lastname}"}

class AssignmentInlineSerializer(serializers.Serializer):
    given_by = UserProfileField(read_only=True)
    title = serializers.CharField(read_only=True)
    deadline = serializers.TimeField(read_only=True)


class CourseField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id': value.pk, 'course name': value.name}

class AssignmentWithCourseSerializer(serializers.ModelSerializer):
    teacher = UserProfileField(read_only=True, source='given_by')
    course = CourseField(read_only=True, source='given_to')
    class Meta:
        model = Assignment
        fields = ('id', 'given_by', 'title', 'body', 'attachment', 
            'given_to', 'given_on', 'deadline', 'course', 'teacher')


#Solutions

class AssignmentSolutionSerializer(serializers.ModelSerializer):
    # assignment_id = serializers.IntegerField(write_only=True, required=False)
    assignment_detail = AssignmentInlineSerializer(source='assignment', read_only=True)
    student_detail = StudentProfileInlineSerializer(source='student', read_only=True)
    class Meta:
        model = Solution
        fields = ('assignment', 'student', 'assignment_detail', 'student_detail', 'body', 'attachment', 'date_created', 'date_submitted', 'completed', 'turn_in', 'date_marked')


class AssignmentPonSolutionsSerializer(serializers.ModelSerializer):
    """Mainly for teachers"""
    def to_representation(self, instance):
        data = super(AssignmentPonSolutionsSerializer, self).to_representation(instance)
        data.update({
            'solutions': AssignmentSolutionSerializer(Solution.objects.filter(assignment=instance), many=True).data
        })
        return data
    teacher = UserProfileField(read_only=True, source='given_by')
    course = CourseField(read_only=True, source='given_to')
    class Meta:
        model = Assignment
        fields = ('id', 'given_by', 'title', 'body', 'attachment', 
            'given_to', 'given_on', 'deadline', 'course', 'teacher')