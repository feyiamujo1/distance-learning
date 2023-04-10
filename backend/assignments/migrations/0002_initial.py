# Generated by Django 4.1.2 on 2022-10-16 16:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('assignments', '0001_initial'),
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='solution',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='students.studentprofile'),
        ),
        migrations.AddField(
            model_name='remark',
            name='solution',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='assignments.solution'),
        ),
    ]