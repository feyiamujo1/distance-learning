FROM python:3.8
ENV PYTHONUNBUFFERED 1
COPY . /app/backend
WORKDIR /app/backend
# COPY requirements.txt /app/backend
RUN pip install -r requirements.txt
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]