from django.urls import path
from .views import CourseLessons, CourseView, CourseDetailView, CoursesWithAssignment, CoursesWithQuizzes

urlpatterns = [
    path('', CourseView.as_view(), name="course-list"),
    path("<int:pk>/", CourseDetailView.as_view(), name="course-detail"),
    path("courses_with_assignments/", CoursesWithAssignment.as_view(), name="courses-with-assignment"),
    path("courses_with_quizzes/", CoursesWithQuizzes.as_view(), name="courses-with-quiz"),
    path("course/<int:pk>/lessons/", CourseLessons.as_view(), name="course-lessons")
]