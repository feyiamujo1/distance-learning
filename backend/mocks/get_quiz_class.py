import requests

endpoint = "http://localhost:8000/quizzes/class/quizzes/"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
    'course_id': 2,
}

response = requests.get(endpoint, headers=headers, json=data)
print(response.json())