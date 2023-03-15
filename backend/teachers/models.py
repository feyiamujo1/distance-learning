from django.db import models
from django.contrib.auth import get_user_model

from classes.models import Course
from .managers import TeacherManager
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.

User = get_user_model()

class Teacher(User):
    base_role = User.Role.STAFF
    teachers = TeacherManager()

    class Meta:
        proxy = True

class TeacherProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    picture = models.ImageField(null=True, blank=True, upload_to="images/")
    teacher_id = models.CharField(null=True, blank=True, max_length=20)
    courses = models.ManyToManyField(Course, through='CourseTeacher', related_name="teachers")

    def __str__(self) -> str:
        return f"Teacher {self.user}"

class CourseTeacher(models.Model):
    teacher = models.ForeignKey(TeacherProfile, related_name='adminship', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='membership', on_delete=models.CASCADE)
    admin = models.BooleanField(default=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.teacher} on {self.course}"

    class Meta:
        unique_together = ('teacher', 'course',)

@receiver(post_save, sender=Teacher)
def create_user_profile(sender, instance, created, **kwargs):
    if created and instance.role == "STAFF":
        TeacherProfile.objects.create(user=instance, teacher_id=kwargs['teacher_id'])