# Generated by Django 4.1.2 on 2022-12-15 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quizzes', '0003_alter_quiz_questions'),
        ('students', '0004_alter_classstudent_unique_together'),
        ('announcements', '0004_alter_announcement_attachment'),
        ('assignments', '0005_alter_solution_date_marked_and_more'),
        ('teachers', '0004_alter_classteacher_unique_together'),
        ('classes', '0006_class_description'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Class',
            new_name='Course',
        ),
        migrations.AlterModelOptions(
            name='course',
            options={'verbose_name_plural': 'courses'},
        ),
    ]