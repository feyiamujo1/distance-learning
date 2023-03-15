from datetime import timezone
from django.db import models
from teachers.models import TeacherProfile
from students.models import StudentProfile
from classes.models import Course

# Create your models here.

class Assignment(models.Model):
    given_by = models.ForeignKey(TeacherProfile, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=150)
    body = models.TextField(max_length=1040, null=True, blank=True)
    attachment = models.FileField(upload_to="files/",max_length=20000, null=True,blank=True)
    given_to = models.ForeignKey(Course, on_delete=models.CASCADE)
    given_on = models.DateTimeField(auto_now_add=True)
    deadline = models.DateField(null=True)
    
    def __str__(self):
        return f"{self.title}, {self.given_on}"

class Solution(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    body = models.TextField(max_length=2000, blank=True, null=True)
    attachment = models.FileField(upload_to="solutions/",max_length=20000, null=True,blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_submitted = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)
    turn_in = models.BooleanField(default=False)
    date_marked = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.assignment}, {self.student}"

    def submit(self):
        self.turn_in = True
        self.date_submitted = timezone.now()

    def mark_complete(self):
        self.completed = True
        self.date_marked = timezone.now()

class Remark(models.Model):
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)
    body = models.TextField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Remark {self.solution}"
