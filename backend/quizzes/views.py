from django.shortcuts import render
from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView, 
    CreateAPIView, ListAPIView, UpdateAPIView, RetrieveUpdateAPIView, RetrieveAPIView)
from rest_framework.views import APIView
from .models import Quiz, Question, AnswerChoice, Answer, QuizSolution, Score
from .serializers import (QuizCreateSerializer, QuestionCreateSerializer,
     AnswerCreateSerializer, QuizSolutionCreateSerializer, AnswerChoiceSerializer,
      ScoreSerializer, QuestionListSerializer,
      QuizUpdateSerializer, QuizWithQuestionsSerializer, RemoveQuestionSerializer,
      QuizCourseGetSerializer, QuizSolutionDetailSerializer)
from teachers.models import TeacherProfile
from users import authentication
from rest_framework import authentication as r_auth
from .permissions import IsAdminOrTeacherPermission
from rest_framework import serializers, status
from rest_framework.response import Response
from classes.models import Course
from students.models import StudentProfile
# Create your views here.

class QuizAPIView(ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizCreateSerializer
    authentication_classes = [
        authentication.TokenAuthentication,
        r_auth.BasicAuthentication,
        r_auth.SessionAuthentication,
    ]

    def perform_create(self, serializer):
        if self.request.user.role == "STAFF":
            serializer.save(created_by=TeacherProfile.objects.get(user=self.request.user))
        else:
            return

class QuizUpdateView(RetrieveUpdateDestroyAPIView):
    """
    Updates Quiz name with questions

    Request:
    data = {
    'name': "General Knowledge
    'question_ids': [3,4]
    }

    Responses:
    {
        'name': 'General Knowledge', 
        'questions': [3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 24, 26, 27, 31, 32, 33, 34, 35], 
        'created_by': 'Teacher taslim@django.core', 
        'created_for': 
        'Physics, 2019/2020', 
        'date_created': '2022-12-12T13:33:03.659028Z', 
        'last_updated': '2022-12-14T09:53:36.238158Z'
    }

    {
        'detail': 'Not found'
    }
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizUpdateSerializer

    def update(self, request, *args, **kwargs):
        data = self.request.data
        obj = Quiz.objects.filter(id=kwargs['pk']).first()
        if hasattr(obj, 'id'):
            if 'question_ids' in data:
                for num in data['question_ids']:
                    q = Question.objects.filter(id=num).first()
                    if hasattr(q, 'id'):
                        obj.questions.add(q)
                    else:
                        raise serializers.ValidationError("Question not found")
        else:
            return Response({"detail":"Not found"}, status=status.HTTP_404_NOT_FOUND)

        return super().update(request, *args, **kwargs)

class QuestionListAPIView(ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionListSerializer

class QuestionCreateAPIView(ListCreateAPIView):
    """
    Request:
    {
        'body': "Don't throw stones at _____ houses.",
        'answer': 'glass',
        'incorrect_answers' : ['mud', 'tree', 'concrete'],
        'quiz_id' : 1
    }

    Response:
    {
        'body': "Don't throw stones at _____ houses.", 
        'correct_answer': 'glass', 'incorrect_answers': [
        {'91': 'mud'}, {'92': 'tree'}, {'93': 'concrete'}]
    }
    """
    queryset = Question.objects.all()
    serializer_class = QuestionCreateSerializer
    permission_classes = [IsAdminOrTeacherPermission]
    authentication_classes = [
        authentication.TokenAuthentication,
        r_auth.BasicAuthentication,
        r_auth.SessionAuthentication,
    ]
    
    def get(self, request, *args, **kwargs):
        questions = Question.objects.all()
        serializer = QuestionListSerializer(questions, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(response, status=status.HTTP_201_CREATED, headers=headers)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            # print(serializer.validated_data)
            data = self.request.data
            current_teacher = TeacherProfile.objects.get(user=self.request.user)
            correct_answer = AnswerChoice.objects.create(created_by=current_teacher, body=serializer.validated_data.get('answer'))
            correct_answer.save()
            correct_answer.refresh_from_db()
            question = Question.objects.create(created_by=current_teacher, body=serializer.validated_data.get('body'), correct_answer=correct_answer)
            question.correct_answer = correct_answer
            # print(serializer.validated_data.get('incorrect_answers'))
            if 'incorrect_answers' in serializer.validated_data:
                for ans in serializer.validated_data.get('incorrect_answers'):
                    incorrect_answer = AnswerChoice.objects.create(created_by=current_teacher, body=ans)
                    incorrect_answer.save()
                    incorrect_answer.refresh_from_db()
                    question.incorrect_answers.add(incorrect_answer)
            question.save()
            if 'quiz_id' in data:
                quiz = Quiz.objects.filter(id=data['quiz_id']).first()
                quiz.questions.add(question)
            serializer_data = QuestionListSerializer(question).data
            return serializer_data
        else:
            return Response(serializer.errors,status=400)

class QuizCreateWithMultipleQuestions(APIView):
    """
    Request:
    {
        "quiz_id": 1,
        "questions": [
            {'body': 'How many planets are there?',
            'answer': 'more than 9',
            'incorrect_answers':[
                'three','nine','eight'
                ]},
            {'body': 'which of the following is not considered queer?',
            'answer': 'heterosexual',
            'incorrect_answers':[
                'transgender','gay','bisexual'
                ]}
            ]
    }

    Response:

    {
        'quiz_id': 1, 
        'questions': [
            {'body': 'How many planets are there?', 
                'correct_answer': 'more than 9', 
                'incorrect_answers': [
                    {'95': 'three'}, {'96': 'nine'}, {'97': 'eight'}
                    ]},
            {'body': 'which of the following is not considered queer?', 
                'correct_answer': 'heterosexual', 
                'incorrect_answers': [
                    {'99': 'transgender'}, {'100': 'gay'}, {'101': 'bisexual'}
                    ]}
                ]
    }
    """
    serializer_class = QuizWithQuestionsSerializer
    def get(self, request):
        quizzes = Quiz.objects.all()
        return Response(QuizCreateSerializer(quizzes, many=True, context={'request':request}).data, status=status.HTTP_200_OK)
    
    def post(self, request):
        questions = self.request.data['questions']
        quiz_id = self.request.data['quiz_id']
        teacher = TeacherProfile.objects.get(user=self.request.user)
        response = {
                    'quiz_id':quiz_id,
                    'questions' : [],
                    }
        for question in questions:
            saved_question=QuestionCreateAPIView.perform_create(self, serializer=QuestionCreateSerializer(data=question))
            response['questions'].append(saved_question)
        return Response(response, status=status.HTTP_201_CREATED)
    

class RemoveQuestionFromQuizView(APIView):
    # serializer_class = RemoveQuestionSerializer
    """
    Request:
    {
        "questions":
        [2,3,7,8,9,10,11,12,13,14,15,16,17]
    }

    """
    def get(self, request, **kwargs):
        quiz = Quiz.objects.filter(id=kwargs['pk']).first()
        if hasattr(quiz, 'id'):
            return Response(QuizCreateSerializer(quiz, context={'request': request}, many=False).data, status=status.HTTP_200_OK)
        return Response({'detail':'Not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, **kwargs):
        quiz = Quiz.objects.filter(id=kwargs['pk']).first()
        if hasattr(quiz, 'id'):
            if 'questions' in request.data:
                for id in request.data['questions']:
                    question =  Question.objects.get(id=id)
                    if hasattr(question, 'id') and question in quiz.questions.all():
                        quiz.questions.remove(question)
                        quiz.refresh_from_db()
                    else:
                        # return Response({'detail':'Not found'}, status=status.HTTP_404_NOT_FOUND)
                        continue
            return Response(QuizCreateSerializer(quiz, context={'request': request}, many=False).data, status=status.HTTP_202_ACCEPTED)
        return Response({'detail':'Not found'}, status=status.HTTP_404_NOT_FOUND)

class GetQuizzesByCreatorWithCourse(APIView):
    serializer_class = QuizCourseGetSerializer
    def get(self, request, *args, **kwargs):
        if 'course' in request.data:
            course = Course.objects.filter(id=request.data['course_id']).first()
            if hasattr(course, 'id'):
                data = Quiz.objects.filter(created_by=TeacherProfile.objects.get(user=request.user.id), created_for=request.data['course_id']).all()
                return Response(QuizCreateSerializer(data, many=True, context={'request': request}).data, status=status.HTTP_200_OK)
            else:
                return(Response({'detail': 'not found'}, status=status.HTTP_404_NOT_FOUND))


"""
amswers: [
    {
        "question_id":6,
        "answer_choice_id":6
    },
    {
        "question_id":26,
        "answer_choice_id":72
    },
    ...
]
"""
class QuizDetailAPIView(RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizCreateSerializer

    # def get_serializer_class(self):
    #     if self.action == "retrieve":
    #         return QuizCreateSerializer
    #     if self.action == "update":
    #         return 
    #     return QuizCreateSerializer
    def get(self, request, *args, **kwargs):
        quiz = self.get_object()
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            quiz_solution = QuizSolution.objects.filter(quiz=quiz, student=student_id).first()
            print(vars(quiz_solution))
            data = QuizSolutionDetailSerializer(quiz_solution).data if hasattr(quiz_solution, 'id') else {"detail":"not found"}
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            quiz_solution = QuizSolution.objects.filter(quiz=quiz).all()
            data = QuizSolutionDetailSerializer(quiz_solution, many=True).data
        return Response(data=data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        if request.user.role != "STUDENT":
            return Response({'detail':'forbidden'}, status=status.HTTP_403_FORBIDDEN)
        student = StudentProfile.objects.get(user=request.user)
        quiz = self.get_object()
        solution = QuizSolution.objects.get(quiz=quiz, student=student)
        if hasattr(solution, 'id'):
            solution.refresh_from_db()
        else:
            solution = QuizSolution.objects.create(quiz=quiz, student=student)
            solution.refresh_from_db()
        if 'answers' in request.data:
            for answer in request.data['answers']:
                question = Question.objects.get(pk=answer['question_id'])
                answer_choice = AnswerChoice.objects.get(pk=answer['answer_choice_id'])
                # answer = Answer.objects.get_or_create(quiz_solution=solution, question=question, body=answer_choice)
                answer = Answer.objects.get(quiz_solution=solution, question=question)
                if hasattr(answer, 'id'):
                    answer.body = answer_choice
                    answer.save()
                    answer.refresh_from_db()
                else:
                    answer = Answer.objects.create(quiz_solution=solution, question=question, body=answer_choice)
                    answer.refresh_from_db()

                # answer.refresh_from_db()
            # solution.refresh_from_db()
            quiz_solution = solution
            data = QuizSolutionDetailSerializer(quiz_solution).data
            return Response(data=data, status=status.HTTP_201_CREATED) 
        return Response({'detail':'an error occured.'}, status=status.HTTP_400_BAD_REQUEST)
        

class QuizSolutionDetailAPIView(RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizCreateSerializer
    
    def get(self, request, *args, **kwargs):
        quiz = self.get_object()
        if self.request.user.role == "STUDENT":
            student_id = StudentProfile.objects.filter(user=self.request.user.id).first()
            quiz_solution = QuizSolution.objects.filter(quiz=quiz, student=student_id).first()
            data = QuizSolutionDetailSerializer(quiz_solution).data if quiz_solution else {"detail":"not found"}
        if self.request.user.role == "STAFF":
            teacher_id = TeacherProfile.objects.filter(user=self.request.user.id).first()
            quiz_solution = QuizSolution.objects.filter(quiz=quiz).all()
            data = QuizSolutionDetailSerializer(quiz_solution, many=True).data
        return Response(data=data, status=status.HTTP_200_OK)


# class QuizSubmitAPIView(APIView):

class AnswerCreateAPIView(ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerCreateSerializer

class QuizSolutionAPIView(ListCreateAPIView):
    queryset = QuizSolution.objects.all()
    serializer_class = QuizSolutionCreateSerializer

class AnswerChoiceAPIView(ListCreateAPIView):
    queryset = AnswerChoice.objects.all()
    serializer_class = AnswerChoiceSerializer

class ScoreAPIView(ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer