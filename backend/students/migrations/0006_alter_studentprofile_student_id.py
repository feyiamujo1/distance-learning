# Generated by Django 4.1.2 on 2023-02-08 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0005_rename_classstudent_coursestudent_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='student_id',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
