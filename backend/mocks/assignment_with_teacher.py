import requests

endpoint = "http://127.0.0.1:8000/assignments/teacher/class"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
    'course_id': 4,
}

response = requests.get(endpoint, json=data, headers=headers)
print(response.text)