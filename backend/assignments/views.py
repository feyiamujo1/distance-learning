from django.shortcuts import render
from .serializers import (AssignmentDetailSerializer, 
        AssignmentInlineSerializer, AssignmentSerializer, 
        AssignmentWithCourseSerializer, AssignmentSolutionSerializer, AssignmentPonSolutionsSerializer)
from .models import Assignment, Solution
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveDestroyAPIView, ListAPIView
from teachers.models import TeacherProfile
from students.models import StudentProfile, CourseStudent
from classes.models import Course
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsStaffAssignmentOwnerOrCoStaff
# Create your views here.

class AssignmentView(ListCreateAPIView):
    queryset = Assignment.objects.all()
    # serializer_class = AssignmentSerializer
    serializer_class = AssignmentWithCourseSerializer
    
    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(given_by=teacher_id)
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            # course = CourseStudent.objects.filter(student=student_id).all()
            courses = Course.objects.filter(studentship__student=student_id)
            return self.queryset.filter(given_to__in=courses)
        return self.queryset.all()

    def create(self, request, *args, **kwargs):
        user = self.request.user
        if user.role == "STAFF":
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            course_id = serializer.validated_data.get("given_to").id
            course = Course.objects.get(id=int(course_id))
            user_teacher = TeacherProfile.objects.get(user=user)
            if course.created_by == user_teacher or user_teacher.courses == course:
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response({'detail':'only course staff users can give assignments'}, status=status.HTTP_403_FORBIDDEN)

    def perform_create(self, serializer):
        teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
        serializer.save(given_by=teacher_id)

class GetAssignmentsGivenToClassByTeacher(ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
        course = self.request.data.get('course_id')
        get_course = Course.objects.filter(id=course).first()
        if hasattr(get_course, 'id'):
            return self.queryset.filter(given_by=teacher_id, given_to=get_course)
        return Response({'detail':'course not found'}, status=status.HTTP_404_NOT_FOUND)

    def perform_create(self, serializer):
        teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
        course = self.request.data.get('course_id')
        get_course = Course.objects.filter(id=course).first()
        if hasattr(get_course, 'id'):
            serializer.save(given_by=teacher_id, given_to=get_course)
        return Response({'detail':'course not found'}, status=status.HTTP_404_NOT_FOUND)

class AssignmentDetailView(RetrieveDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentDetailSerializer

    def get_queryset(self):
        teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
        return self.queryset.filter(given_by=teacher_id)

    def destroy(self, request, *args, **kwargs):
        teacher = TeacherProfile.objects.get(user=self.request.user)
        obj = self.get_object()
        if obj.given_by == teacher:
            return super().destroy(request, *args, **kwargs)
        return Response({'detail':'Not Allowed'}, status=status.HTTP_403_FORBIDDEN)


'''
Solution Endpoint
'''
class SolutionListCreateView(ListCreateAPIView):
    queryset = Solution.objects.all()
    serializer_class = AssignmentSolutionSerializer

    def get_queryset(self):
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(student=student_id)
        # NOT TESTED
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            if "assignment_id" in self.request.data:
                return self.queryset.filter(assignment=self.request.data['assignment_id'])
            return self.queryset.filter(assignment__given_by=teacher_id)
        return super().get_queryset()

    def perform_create(self, serializer):
        if self.request.user.role == "STUDENT":
            assignment = serializer.validated_data.get('assignment')
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            if assignment.given_to == student_id.courses:
                serializer.save(student=student_id)
            return Response({'detail': 'forbidden'}, status=status.HTTP_403_FORBIDDEN)
        # return super().perform_create(serializer)
        return Response({'detail': 'forbidden'}, status=status.HTTP_403_FORBIDDEN)


class AssignmentWithSolutionsAPIView(RetrieveDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentPonSolutionsSerializer
    permission_classes = [IsStaffAssignmentOwnerOrCoStaff]

    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(given_by=teacher_id)
        return self.queryset.all()

class ASLAPI(ListAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentPonSolutionsSerializer
    permission_classes = [IsStaffAssignmentOwnerOrCoStaff]

    def get_queryset(self):
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            return self.queryset.filter(given_by=teacher_id)
        return self.queryset.all()