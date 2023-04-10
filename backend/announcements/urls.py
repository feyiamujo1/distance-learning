from django.urls import path
from .views import AnnouncementDetailView, AnnouncementListCreateView, LessonListCreateAPIView, LessonRetriveUpdateDestroyAPIView

urlpatterns = [
    path('', AnnouncementListCreateView.as_view(), name='announcement-create'),
    path('<int:pk>/', AnnouncementDetailView.as_view(), name='announcement-detail'),
    path("lessons/", LessonListCreateAPIView.as_view(), name="lesson-list-create"),
    path("lesson/<int:pk>/",LessonRetriveUpdateDestroyAPIView.as_view(), name="lesson-detail" ),
]