from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token
from .views import CustomAuthToken

urlpatterns = [
    path("auth/", CustomAuthToken.as_view()),
]