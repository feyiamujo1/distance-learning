from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth import get_user_model

User = get_user_model()

class TeacherManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=User.Role.STAFF)
