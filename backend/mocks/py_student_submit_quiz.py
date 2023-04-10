import requests

endpoint = "http://127.0.0.1:8000/quizzes/detail/1/"


headers = {
    'Authorization': 'Bearer ea360ad4dfcceb95bf0f884a62d83b924bb0551e'
}

data = {
    # 'answers': [{
    #     "question_id":6,
    #     "answer_choice_id":6
    # },
    # {
    #     "question_id":26,
    #     "answer_choice_id":72
    # },
    # {
    #     "question_id":27,
    #     "answer_choice_id":74
    # },
    # {
    #     "question_id":31,
    #     "answer_choice_id":90
    # },
    # {
    #     "question_id":32,
    #     "answer_choice_id":94
    # },
    # {
    #     "question_id":33,
    #     "answer_choice_id":98
    # }]
}
response = requests.post(endpoint, headers=headers, json=data)
print(response.json())