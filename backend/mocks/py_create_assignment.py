import requests

endpoint = "http://localhost:8000/assignments/"

headers = {
    'Authorization': 'Bearer 573358f451200b9e21ddd34e6565a709d0e1a197'
}

data = {
    'title': "Classes of cow.",
    'body' : "list 9 types of cow.",
    'given_to' : 4
}


response = requests.post(endpoint, headers=headers, json=data)
print(response.json())