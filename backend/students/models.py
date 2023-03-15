from django.db import models
from django.contrib.auth import get_user_model

from classes.models import Course
from .managers import StudentManager
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()

class Student(User):
    base_role = User.Role.STUDENT
    students = StudentManager()

    class Meta:
        proxy = True

class StudentProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    picture = models.ImageField(null=True, blank=True, upload_to="images/")
    student_id = models.CharField(null=True, blank=True, max_length=20)
    courses = models.ManyToManyField(Course, through='CourseStudent', related_name="students")

    def __str__(self) -> str:
        return "Student %r" % self.user

class CourseStudent(models.Model):
    student = models.ForeignKey(StudentProfile, related_name='studentship', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='studentship', on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course',)

@receiver(post_save, sender=Student)
def create_user_profile(sender, instance, created, **kwargs):
    if created and instance.role == "STUDENT":
        StudentProfile.objects.create(user=instance, student_id=kwargs['student_id'])