from django.shortcuts import render
from .serializers import CourseDetailSerializer, CourseLessonsSerializer, CourseListCreateSerializer, CourseInlineSerializer
from .models import Course
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from teachers.models import TeacherProfile
from students.models import StudentProfile
from assignments.views import AssignmentView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from assignments.models import Assignment
from quizzes.models import Quiz
from announcements.models import Lesson
from assignments.serializers import AssignmentWithCourseSerializer
from quizzes.serializers import QuizInlineSerializer
# Create your views here.

class CourseView(ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListCreateSerializer

    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(created_by=teacher_id)
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(studentship__student=student_id)
        return self.queryset.all()


class CoursesWithAssignment(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseInlineSerializer

    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            assignments = Assignment.objects.filter(given_by=teacher_id)
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            courses = Course.objects.filter(studentship__student=student_id)
            assignments = Assignment.objects.filter(given_to__in=courses)
        courses = CourseView.get_queryset(self).filter(assignment__in=assignments)
        return courses.distinct()

    def get(self, request, *args, **kwargs):
        data = CourseInlineSerializer(self.get_queryset(), many=True, context={'request': request})
        return Response({'data': data.data}, status=status.HTTP_200_OK)
    
@api_view(['GET'])
def course_assignments(request, course_id):
    course = Course.objects.filter(id=course_id).first()
    if not course:
        return Response({'error':'course not found'}, status=status.HTTP_404_NOT_FOUND)
    assignments = Assignment.objects.filter(given_to=course).all()
    return Response(AssignmentWithCourseSerializer(assignments, many=True, context={'request': request}).data, status=status.HTTP_200_OK)

class CoursesWithQuizzes(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseInlineSerializer

    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            quizzes = Quiz.objects.filter(created_by=teacher_id)
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            courses = Course.objects.filter(studentship__student=student_id)
            quizzes = Quiz.objects.filter(created_for__in=courses)
        courses = CourseView.get_queryset(self).filter(quiz__in=quizzes)
        return courses.distinct()

@api_view(['GET'])
def course_quizzes(request, course_id):
    course = Course.objects.filter(id=course_id).first()
    if not course:
        return Response({'error':'course not found'}, status=status.HTTP_404_NOT_FOUND)
    quizzes = Quiz.objects.filter(created_for=course).all()
    return Response(QuizInlineSerializer(quizzes, many=True, context={'request': request}).data, status=status.HTTP_200_OK)

class CourseDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseDetailSerializer

class CourseLessons(RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseLessonsSerializer
