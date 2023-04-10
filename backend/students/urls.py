from django.urls import path
from .views import StudentDetailView, StudentListCreateView, CourseStudentCreateListView, CourseStudentDetailView

urlpatterns = [
    path('', StudentListCreateView.as_view(), name='student-create'),
    path('<int:pk>/', StudentDetailView.as_view(), name='student-detail'),
    path('studentships/', CourseStudentCreateListView.as_view(), name='studentships'),
    path('studentships/<int:pk>/', CourseStudentDetailView.as_view(), name='studentship-detail')
]