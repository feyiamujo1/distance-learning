import requests

endpoint = "http://localhost:8000/quizzes/questions/create/"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}
data = {
    'body': "Don't throw stones at _____ houses.",
    'answer': 'glass',
    'incorrect_answers' : ['mud', 'tree', 'concrete'],
    'quiz_id' : 1
}
response = requests.post(endpoint, json=data, headers=headers)
print(response.json())