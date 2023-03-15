from rest_framework import serializers
from .models import Announcement, Lesson


class UserInlineSerilizer(serializers.Serializer):
    firstname = serializers.CharField()
    lastname = serializers.CharField()

class AnnouncementListCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='announcement-detail', read_only=True)
    posted_to_detail = UserInlineSerilizer(read_only=True)
    posted_by_detail = UserInlineSerilizer(read_only=True)
    class Meta:
        model = Announcement
        fields = ('url','title','posted_by', 'posted_to', 'body', 'attachment', 'date', 'posted_to_detail', 'posted_by_detail')

class AnnouncementInlineSerializer(serializers.Serializer):
    url = serializers.HyperlinkedIdentityField(view_name='announcement-detail', read_only=True)
    title = serializers.CharField(read_only=True)
    posted_by = serializers.StringRelatedField(read_only=True)
    date = serializers.DateTimeField(read_only=True)

class LessonListCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
