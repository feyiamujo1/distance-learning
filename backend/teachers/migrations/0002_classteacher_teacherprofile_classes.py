# Generated by Django 4.1.2 on 2022-10-18 06:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0004_remove_class_students_remove_class_teachers_and_more'),
        ('teachers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('admin', models.BooleanField(default=False)),
                ('class_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='membership', to='classes.class')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adminship', to='teachers.teacherprofile')),
            ],
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='classes',
            field=models.ManyToManyField(related_name='teachers', through='teachers.ClassTeacher', to='classes.class'),
        ),
    ]