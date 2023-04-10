from django.db import models

# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length=125)
    session = models.CharField(max_length=20)
    created_by = models.ForeignKey('teachers.TeacherProfile', on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(max_length=2000, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "courses"
        
    def __str__(self) -> str:
        return f"{self.name}, {self.session}"