import requests

endpoint = "http://localhost:8000/quizzes/create/"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
    'name': 'Lesson 5',
    'created_for': 4,
}

response = requests.post(endpoint, headers=headers, json=data)
print(response.json())