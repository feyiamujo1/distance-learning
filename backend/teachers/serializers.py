from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Teacher, TeacherProfile, CourseTeacher
from assignments.models import Assignment
from announcements.models import Announcement
from classes.serializers import CourseInlineSerializer, Course

User=get_user_model()

class TeacherCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='teacher-detail', read_only=True)
    teacher_id = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        email = validated_data.get('email')
        password = validated_data.get('password')
        teacher_id = validated_data.pop('teacher_id')
        teacher = User(**validated_data)
        teacher.set_password(password)
        teacher.is_active = True
        teacher.role = User.Role.STAFF
        teacher.save()

        profile = TeacherProfile.objects.create(user=teacher, teacher_id=teacher_id or None)
        profile.save()
        return teacher

    class Meta:
        model = Teacher
        fields = ('id', 'email','firstname','lastname','role','url', 'password', 'teacher_id')


class TeacherDetailSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def to_representation(self, instance):
        data = super(TeacherDetailSerializer, self).to_representation(instance)
        data.update({
            'teacher_id' : TeacherProfile.objects.get(user=instance).teacher_id,
            'courses': CourseInlineSerializer(Course.objects.filter(membership__teacher__user=instance), many=True, context=self.context).data,
            'assignments_given': Assignment.objects.filter(given_by__user=instance).count(),
            'announcements': Announcement.objects.filter(posted_by__user=instance).count(),
            'courses_created': CourseTeacher.objects.filter(course__created_by__user=instance).count()
        })

        return data

    def update(self, instance, validated_data):
        instance.firstname = validated_data.get('firstname')
        instance.lastname = validated_data.get('lastname')
        instance.set_password(validated_data.get('password'))
        instance.save()
        return instance

    class Meta:
        model = Teacher
        fields = ('email','firstname','lastname', 'password')


class CourseTeacherCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTeacher
        fields = ('teacher', 'course', 'date_added',)
