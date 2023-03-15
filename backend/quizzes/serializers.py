from rest_framework.serializers import Serializer, ModelSerializer
from rest_framework import serializers

from .models import Question, Quiz, QuizSolution, Answer, AnswerChoice, Score
from classes.serializers import CourseInlineSerializer
from classes.models import Course
from students.serializers import StudentProfileInlineSerializer

class AnswerChoicesField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id':value.pk, 'body': value.body}

class QuestionListSerializer(ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    correct_answer = AnswerChoicesField(read_only=True)
    incorrect_answers = AnswerChoicesField(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ('id', 'body', 'correct_answer', 'incorrect_answers',)

    def create(self, validated_data):
        return super().create(validated_data)

class QuizCreateSerializer(ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    url = serializers.HyperlinkedIdentityField(view_name="quiz-update", lookup_field='pk', read_only=True)
    questions = QuestionListSerializer(many=True, required=False)
    course = CourseInlineSerializer(read_only=True, source='created_for')

    class Meta:
        model = Quiz
        fields = ('id', 'created_by', 'course', 'created_for', 'name', 'date_created', 'last_updated', 'questions', 'url')

class AddQuestionsToQuizSerializer(Serializer):
    questions = serializers.ListField(read_only=True)

class QuizUpdateSerializer(ModelSerializer):
    question_ids = serializers.ListField(write_only=True, required=False)
    created_by = serializers.CharField(read_only=True)
    created_for = serializers.CharField(read_only=True)
    name = serializers.CharField(required=False)
    questions = QuestionListSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ('id', 'name', 'questions','question_ids', 'created_by','created_for',  'date_created', 'last_updated',)

class QuizRemoveQuestionsSerializer(Serializer):
    question_ids = serializers.ListField(write_only=True, required=True)

class AnswerChoiceSerializer(ModelSerializer):
    class Meta:
        model = AnswerChoice
        fields = ('id','body',)

class QuizSolutionCreateSerializer(ModelSerializer):
    class Meta:
        model = QuizSolution
        fields = ('quiz', 'student',)

class QuizSolutionSerializer(ModelSerializer):
    class Meta:
        model = QuizSolution
        fields = ('quiz', 'student', 'date_created', 'submitted',)

class AnswerCreateSerializer(ModelSerializer):
    class Meta:
        model = Answer
        fields = (
            'quiz_solution', 'question', 'body',
        )
class QuestionInlineSerializer(Serializer):
    id = serializers.CharField()
    body = serializers.CharField()

class AnswerSerializer(ModelSerializer):
    # status = serializers.SerializerMethodField(read_only=True, source='correct')
    question = QuestionInlineSerializer()
    body = AnswerChoiceSerializer()

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data.update({
            'correct_answer': AnswerChoiceSerializer(instance.question.correct_answer).data,
            'status': instance.correct()
        })
        return data
    class Meta:
        model = Answer
        fields = ('quiz_solution', 'question', 'body',)

    def get_status(self, obj):
        if not hasattr(obj, 'id'):
            return None
        if not isinstance(obj, Answer):
            return None
        return obj.correct

class ScoreSerializer(ModelSerializer):
    class Meta:
        model = Score
        fields = ('quiz', 'quiz_solution', 'correct_answers', 'total_questions',)


class QuestionCreateSerializer(ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(read_only=True)
    answer = serializers.CharField(write_only=True, required=True)
    incorrect_answers = serializers.ListField(write_only=True, required=False)
    quiz_id = serializers.PrimaryKeyRelatedField(queryset=Quiz.objects.all(), write_only=True, required=False)
    
    class Meta:
        model = Question
        fields = ('id', 'body', 'answer', 'incorrect_answers','quiz_id',)

class QuizWithQuestionsSerializer(Serializer):
    quiz_id = serializers.PrimaryKeyRelatedField(queryset=Quiz.objects.all())
    questions = QuestionCreateSerializer(many=True, write_only=True)

class QuizInlineSerializer(Serializer):
    name = serializers.CharField()
    # questions = QuestionListSerializer(many=True)

class UserProfileField(serializers.RelatedField):
    def to_representation(self, value):
        return {'id':value.pk, 'user name': f"{value.user.firstname} {value.user.lastname}"}

class QuizSolutionDetailSerializer(Serializer):
    quiz = QuizInlineSerializer(read_only=True)
    student = StudentProfileInlineSerializer(read_only=True)

    def to_representation(self, instance):
        data = super(QuizSolutionDetailSerializer, self).to_representation(instance)
        answers = Answer.objects.filter(quiz_solution=instance)
        data.update({
            'answers': AnswerSerializer(answers, many=True, context=self.context).data,
            'score': len([x.id for x in answers if x.correct()]),
            'total_questions' : instance.quiz.questions.count()
        })
        return data

class RemoveQuestionSerializer(Serializer):
    questions = serializers.ListField(write_only=True)

class QuizCourseGetSerializer(Serializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), write_only=True)
