from django.db import models
from teachers.models import TeacherProfile
from classes.models import Course
# Create your models here.


class Announcement(models.Model):
    posted_by = models.ForeignKey(TeacherProfile, on_delete=models.CASCADE)
    posted_to = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=30, null=True, blank=True)
    body = models.TextField(max_length=300)
    attachment = models.FileField(max_length=20000, upload_to="files/", null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return "<Announcement %r>" % self.title

class Lesson(models.Model):
    teacher = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True, related_name="lessons")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="lessons")
    title = models.CharField(max_length=1000)
    intro = models.TextField(max_length=10000)
    file = models.FileField(upload_to="files/", null=True, blank=True)
    image = models.ImageField(upload_to="images/", null=True, blank=True)
    audio = models.FileField(upload_to="files/", null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    link1 = models.URLField(max_length=100, null=True, blank=True)
    link2 = models.URLField(max_length=100, null=True, blank=True)