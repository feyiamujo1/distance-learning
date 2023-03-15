from django.urls import path
from .views import (AssignmentDetailView, AssignmentView, GetAssignmentsGivenToClassByTeacher, 
    SolutionListCreateView, AssignmentWithSolutionsAPIView, ASLAPI)

urlpatterns = [
    path("", AssignmentView.as_view(), name='assignment-list'),
    path("teacher/class", GetAssignmentsGivenToClassByTeacher.as_view(), name="assignment-teacher-class"),
    path("<int:pk>/", AssignmentDetailView.as_view(), name='assignment-detail'),
    path("solutions/", SolutionListCreateView.as_view(), name="solution-view"),
    path("solutions/assignment/<int:pk>", AssignmentWithSolutionsAPIView.as_view(), name="assignment-solutions"),
    path("solutions/assignment/", ASLAPI.as_view(), name="assignment-solutions-list")
]