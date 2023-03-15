from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class SuperUserCreateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(max_length=225, write_only=True, required=True)

    def create(self, validated_data):
        email = validated_data.get('email')
        password = validated_data.get('password')

        admin_user = User.objects.create_superuser(email, password=password)
        admin_user.is_active=True
        admin_user.is_admin=True
        admin_user.is_staff=True
        admin_user.save()

        return admin_user

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

