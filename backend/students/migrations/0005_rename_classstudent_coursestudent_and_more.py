# Generated by Django 4.1.2 on 2022-12-15 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0007_rename_class_course_alter_course_options'),
        ('students', '0004_alter_classstudent_unique_together'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ClassStudent',
            new_name='CourseStudent',
        ),
        migrations.RenameField(
            model_name='coursestudent',
            old_name='class_name',
            new_name='course',
        ),
        migrations.AlterUniqueTogether(
            name='coursestudent',
            unique_together={('student', 'course')},
        ),
        migrations.RemoveField(
            model_name='studentprofile',
            name='classes',
        ),
        migrations.AddField(
            model_name='studentprofile',
            name='courses',
            field=models.ManyToManyField(related_name='students', through='students.CourseStudent', to='classes.course'),
        ),
    ]