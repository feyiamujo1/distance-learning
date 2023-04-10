import requests

endpoint = "http://localhost:8000/users/auth/"
auth_response = requests.post(endpoint, json={'username':'student2@mail.com', 
    'password':'taslim'})
print(auth_response.json())