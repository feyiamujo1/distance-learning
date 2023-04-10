from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from announcements.models import Announcement, Lesson
from students.models import StudentProfile
from teachers.models import TeacherProfile
from classes.models import Course
from rest_framework.response import Response
from rest_framework import status

from announcements.serializers import AnnouncementListCreateSerializer, LessonListCreateSerializer
# Create your views here.

class AnnouncementListCreateView(ListCreateAPIView):
    serializer_class = AnnouncementListCreateSerializer
    queryset = Announcement.objects.all()

    def get_queryset(self):
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            courses = Course.objects.filter(studentship__student=student_id)
            return self.queryset.filter(posted_to__in=courses)
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(posted_by=teacher_id)
        return super().get_queryset()

class AnnouncementDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = AnnouncementListCreateSerializer
    queryset = Announcement.objects.all()

class LessonListCreateAPIView(ListCreateAPIView):
    serializer_class = LessonListCreateSerializer
    queryset = Lesson.objects.all()

    def get_queryset(self):
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            courses = Course.objects.filter(studentship__student=student_id)
            return self.queryset.filter(course__in=courses)
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(teacher=teacher_id)
        return super().get_queryset()

    def create(self, request, *args, **kwargs):
        if request.user.role != "STAFF":
            return Response({'detail':'Not allowed'}, status=status.HTTP_403_FORBIDDEN)
        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer):
        teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
        serializer.save(teacher=teacher_id)
        return super().perform_create(serializer)

class LessonRetriveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = LessonListCreateAPIView
    queryset = Lesson.objects.all()