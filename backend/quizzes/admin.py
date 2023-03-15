from django.contrib import admin
from .models import Question, Quiz, QuizSolution, Answer, AnswerChoice
# Register your models here.

admin.site.register(Question)
admin.site.register(Quiz)
admin.site.register(QuizSolution)
admin.site.register(Answer)
admin.site.register(AnswerChoice)