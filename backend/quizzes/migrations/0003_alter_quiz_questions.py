# Generated by Django 4.1.2 on 2022-12-15 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizzes', '0002_alter_quiz_questions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='questions',
            field=models.ManyToManyField(blank=True, to='quizzes.question'),
        ),
    ]