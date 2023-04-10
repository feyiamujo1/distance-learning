from rest_framework import serializers
from announcements.models import Announcement, Lesson

from students.models import Student, StudentProfile, CourseStudent
from .models import Course
from teachers.models import Teacher
from announcements.serializers import AnnouncementInlineSerializer, LessonListCreateSerializer
from assignments.models import Assignment
from rest_framework.reverse import reverse
from rest_framework.serializers import ModelSerializer
from quizzes.models import Quiz



class UserProfileField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id':value.pk, 'user name': f"{value.user.firstname} {value.user.lastname}"}

class QuizInlineSerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    created_by = UserProfileField(read_only=True)
    created_for = serializers.CharField()
    name = serializers.CharField(read_only=True)
    date_created = serializers.DateTimeField(read_only=True)
    url = serializers.SerializerMethodField()

    def get_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("quiz-detail", kwargs={"pk":obj.id}, request=request)

class AssignmentInlineSerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    given_by = UserProfileField(read_only=True)
    title = serializers.CharField(read_only=True)
    deadline = serializers.TimeField(read_only=True)
    url = serializers.SerializerMethodField()

    def get_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse("assignment-solutions", kwargs={"pk": obj.id}, request=request)

class TeacherInlineSerializer(serializers.Serializer):
    # url = serializers.HyperlinkedIdentityField(view_name='teacher-detail', lookup_field='pk', read_only=True)
    email = serializers.EmailField(read_only=True)
    firstname = serializers.CharField(read_only=True)
    lastname = serializers.CharField(read_only=True)

class StudentshipDetailViewSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='studentship-detail', lookup_field='pk', read_only=True)

    class Meta:
        model = CourseStudent
        fields = ('url',)

class StudentInlineSerializer(serializers.Serializer):
    firstname = serializers.CharField(read_only=True)
    lastname = serializers.CharField(read_only=True)
    email = serializers.CharField(read_only=True)

    def to_representation(self, instance):
        data = super(StudentInlineSerializer, self).to_representation(instance)
        student = StudentProfile.objects.filter(user=instance).first()
        course = self.context['view'].kwargs['pk']
        course = Course.objects.get(id=course)
        data.update({
            'student_id' : StudentProfile.objects.get(user=instance).student_id,
            'picture': student.picture or None,
            'id' : student.student_id or None,
            'studentship' : StudentshipDetailViewSerializer(CourseStudent.objects.get(student__user=instance, course=course), context=self.context).data
        })

        return data

class CourseDetailSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='course-detail', lookup_field='pk', read_only=True)
    created_by = serializers.StringRelatedField()
    lessons_url = serializers.HyperlinkedIdentityField(view_name='course-lessons')

    def to_representation(self, instance):
        data = super(CourseDetailSerializer, self).to_representation(instance)
        data.update({
            # 'teachers': TeacherInlineSerializer(Teacher.objects.filter(teacherprofile__adminship__course=instance), many=True).data,
            'students': StudentInlineSerializer(Student.objects.filter(studentprofile__courses=instance), many=True, context=self.context).data,
            # 'announcements' : AnnouncementInlineSerializer(Announcement.objects.filter(posted_to=instance), many=True, context=self.context).data,
            'assignments': AssignmentInlineSerializer(Assignment.objects.filter(given_to=instance), many=True, context=self.context).data,
            'quizzes': QuizInlineSerializer(Quiz.objects.filter(created_for=instance), many=True, context=self.context).data,
        })

        return data
    class Meta:
        model = Course
        fields = ('url', 'lessons_url','id', 'name', 'session', 'description', 'created_by')

class CourseListCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='course-detail', read_only=True)
    class Meta:
        model = Course
        fields = ('id','url','name', 'session', 'description', 'date_created', 'created_by')


class CourseInlineSerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    url = serializers.HyperlinkedIdentityField(view_name='course-detail', lookup_field='pk', read_only=True)
    name = serializers.CharField(read_only=True)
    session = serializers.CharField(read_only=True)

class CourseLessonsSerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    url = serializers.HyperlinkedIdentityField(view_name='course-detail', lookup_field='pk', read_only=True)
    name = serializers.CharField(read_only=True)

    def to_representation(self, instance):
        data = super(CourseLessonsSerializer, self).to_representation(instance)
        data.update({
            'lessons': LessonListCreateSerializer(Lesson.objects.filter(course=instance).all(), many=True).data
        })
        return data

