from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin

from .managers import AccountManager


class User(AbstractBaseUser, PermissionsMixin):
    
    class Role(models.TextChoices):
        ADMIN = "ADMIN", 'admin'
        STUDENT = "STUDENT", 'student'
        STAFF = "STAFF", 'staff'
    base_role = Role.ADMIN

    email = models.EmailField(_('email address'), unique=True)
    firstname = models.CharField(max_length=120, blank=True, null=True)
    lastname = models.CharField(max_length=120, blank=True, null=True)
    role = models.CharField(max_length=50, choices=Role.choices, default=base_role)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    last_updated = models.DateTimeField(_('last updated'), auto_now=True)
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['firstname', 'lastname']

    def __str__(self):
        return self.email
