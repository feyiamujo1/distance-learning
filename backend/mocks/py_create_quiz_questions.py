import requests

endpoint = "http://localhost:8000/quizzes/create_with_questions/"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
        "quiz_id": 6,
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

response = requests.post(endpoint, headers=headers, json=data)
print(response.json())