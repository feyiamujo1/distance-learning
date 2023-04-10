from django.urls import path
from .views import (CourseLessons, CourseView, CourseDetailView, CoursesWithAssignment, 
    CoursesWithQuizzes, course_assignments, course_quizzes)

urlpatterns = [
    path('', CourseView.as_view(), name="course-list"),
    path("<int:pk>/", CourseDetailView.as_view(), name="course-detail"),
    path("courses_with_assignments/", CoursesWithAssignment.as_view(), name="courses-with-assignment"),
    path("course_assignments/<int:course_id>/", course_assignments, name='course-assignments'), 
    path("courses_with_quizzes/", CoursesWithQuizzes.as_view(), name="courses-with-quiz"),
    path("course_quizzes/<int:course_id>/", course_quizzes, name='course-quizzes'),
    path("course/<int:pk>/lessons/", CourseLessons.as_view(), name="course-lessons")
]