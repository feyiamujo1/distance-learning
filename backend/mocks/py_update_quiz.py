import requests

endpoint = "http://127.0.0.1:8000/quizzes/update/1"


headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
    'name': "General Knowledge",
    'question_ids': [3,4]
}
response = requests.put(endpoint, headers=headers, json=data)
print(response.json())