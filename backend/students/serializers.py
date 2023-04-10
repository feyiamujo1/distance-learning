from rest_framework import serializers
from django.contrib.auth import get_user_model
from classes.models import Course

from classes.serializers import CourseInlineSerializer
from .models import Student, StudentProfile, CourseStudent
from assignments.models import Assignment
from announcements.models import Announcement

User = get_user_model()

class StudentCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='student-detail', read_only=True)
    student_id = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        email = validated_data.get('email')
        password = validated_data.get('password')
        student_id = validated_data.pop('student_id')
        student = User(**validated_data)
        student.set_password(password)
        student.is_active= True
        student.role = User.Role.STUDENT
        student.save()

        profile = StudentProfile.objects.create(user=student, student_id=student_id or None)
        profile.save()
        return student

    class Meta:
        model = Student
        fields = ('id', 'email', 'firstname', 'lastname', 'role', 'url', 'password', 'student_id')


class StudentDetailSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True, required=False)
    student_id = serializers.CharField(write_only=True)

    def to_representation(self, instance):
        # print(instance, Class.objects.all().first().students)
        data = super(StudentDetailSerializer, self).to_representation(instance)
        data.update({
            'student_id' : StudentProfile.objects.get(user=instance).student_id,
            'courses' : CourseInlineSerializer(Course.objects.filter(studentship__student__user=instance), many=True, context=self.context).data,
            'assignments': Assignment.objects.filter(given_to__students__user=instance).count(),
            'classes' : Course.objects.filter(studentship__student__user=instance).count(),
        })

        return data
    
    def update(self, instance, validated_data):
        profile = StudentProfile.objects.get(user=instance)
        profile.student_id = validated_data.get('student_id' or None)
        profile.save()
        instance.firstname = validated_data.get('firstname')
        instance.lastname = validated_data.get('lastname')
        # instance.set_password(validated_data.get('password'))
        instance.save()
        return instance

    class Meta:
        model = Student
        fields = ('email', 'firstname', 'lastname', 'student_id') 

class CourseStudentCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='studentship-detail', lookup_field='pk', read_only=True)
    student = serializers.StringRelatedField()
    course = serializers.StringRelatedField()

    class Meta:
        model = CourseStudent
        fields = ('url', 'student', 'course', 'date_added')

class UserInlineSerilizer(serializers.Serializer):
    firstname = serializers.CharField()
    lastname = serializers.CharField()

class StudentProfileInlineSerializer(serializers.Serializer):
    user = UserInlineSerilizer()
    student_id = serializers.CharField()
