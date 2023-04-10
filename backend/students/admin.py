from django.contrib import admin
from.models import Student, StudentProfile, CourseStudent
# Register your models here.

admin.site.register(Student)
admin.site.register(StudentProfile)
admin.site.register(CourseStudent)