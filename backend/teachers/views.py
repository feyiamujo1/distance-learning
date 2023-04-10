from django.shortcuts import render
from .serializers import TeacherCreateSerializer, TeacherDetailSerializer, CourseTeacherCreateSerializer
from .models import Teacher, CourseTeacher
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.


class TeacherListCreateView(ListCreateAPIView):
    queryset = Teacher.teachers.all()
    serializer_class = TeacherCreateSerializer

class TeacherDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Teacher.teachers.all()
    serializer_class = TeacherDetailSerializer

class CourseTeacherCreateAPIView(ListCreateAPIView):
    queryset = CourseTeacher.objects.all()
    serializer_class = CourseTeacherCreateSerializer
