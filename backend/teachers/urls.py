from django.urls import path
from .views import TeacherListCreateView, TeacherDetailView, CourseTeacherCreateAPIView

urlpatterns = [
    path('', TeacherListCreateView.as_view()),
    path('<int:pk>/', TeacherDetailView.as_view(), name='teacher-detail'),
    path('course/teacher/', CourseTeacherCreateAPIView.as_view(), name="course-teacher-create")
]