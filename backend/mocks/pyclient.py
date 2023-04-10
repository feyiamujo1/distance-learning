import requests

endpoint = "http://localhost:8000/users/auth/"
auth_response = requests.post(endpoint, json={'username':'taslim@django.core', 
    'password':'taslim'})
print(auth_response.json())

