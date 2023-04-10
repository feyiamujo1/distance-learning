from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import CourseStudent, Student
from .serializers import CourseStudentCreateSerializer, StudentCreateSerializer, StudentDetailSerializer
# Create your views here.

class StudentListCreateView(ListCreateAPIView):
    queryset = Student.students.all()
    serializer_class = StudentCreateSerializer

class StudentDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentDetailSerializer

class CourseStudentCreateListView(ListCreateAPIView):
    queryset = CourseStudent.objects.all()
    serializer_class = CourseStudentCreateSerializer

class CourseStudentDetailView(RetrieveUpdateDestroyAPIView):
    queryset = CourseStudent.objects.all()
    serializer_class = CourseStudentCreateSerializer

