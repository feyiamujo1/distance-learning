from django.urls import path
from .views import (QuizAPIView, QuestionCreateAPIView, AnswerCreateAPIView, 
        QuizSolutionAPIView, AnswerChoiceAPIView, QuestionListAPIView,
        QuizUpdateView, QuizCreateWithMultipleQuestions, RemoveQuestionFromQuizView,
        GetQuizzesByCreatorWithCourse, QuizDetailAPIView, QuizSolutionDetailAPIView)

urlpatterns = [
    path("detail/<int:pk>/", QuizDetailAPIView.as_view(), name="quiz-detail"),
    path("quiz_solution_detail/<int:pk>/", QuizSolutionDetailAPIView.as_view(), name="quiz-solution-detail"),
    path('create/', QuizAPIView.as_view(), name="quiz-create"),
    path('<int:pk>/', QuizUpdateView.as_view(), name="quiz-update"),
    path('create_with_questions/', QuizCreateWithMultipleQuestions.as_view(), name="quiz-create-questions"),
    path('remove/question/<int:pk>/', RemoveQuestionFromQuizView.as_view(), name="remove-question"),
    path('class/quizzes/', GetQuizzesByCreatorWithCourse.as_view(), name="course-quizzes"),
    path('questions/create/', QuestionCreateAPIView.as_view(), name="question-create"),
    path('questions/list/', QuestionListAPIView.as_view(), name='question-list'),
    path('answer/create/', AnswerCreateAPIView.as_view(), name="answer-create"),
    path('solution/create/', QuizSolutionAPIView.as_view(), name="solution-create"),
    path('answer_choice/create', AnswerChoiceAPIView.as_view(), name="answer-choice-create")
]
