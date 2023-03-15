# Generated by Django 4.1.2 on 2023-01-31 22:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teachers', '0005_rename_classteacher_courseteacher_and_more'),
        ('classes', '0007_rename_class_course_alter_course_options'),
        ('announcements', '0004_alter_announcement_attachment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('intro', models.TextField(max_length=10000)),
                ('file', models.FileField(blank=True, null=True, upload_to='files/')),
                ('image', models.ImageField(upload_to='images/')),
                ('audio', models.FileField(blank=True, null=True, upload_to='files/')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('link1', models.URLField(blank=True, max_length=100, null=True)),
                ('link2', models.URLField(blank=True, max_length=100, null=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='classes.course')),
                ('teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lessons', to='teachers.teacherprofile')),
            ],
        ),
    ]