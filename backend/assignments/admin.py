from django.contrib import admin
from .models import Assignment, Solution, Remark
# Register your models here.

admin.site.register(Assignment)
admin.site.register(Solution)
admin.site.register(Remark)