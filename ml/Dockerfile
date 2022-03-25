FROM python:3.9.4-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt .
RUN pip install -r requirements.txt
RUN  apt-get update
RUN  apt-get install -y wget
RUN wget https://storage.yandexcloud.net/natasha-navec/packs/navec_news_v1_1B_250K_300d_100q.tar
COPY . .
RUN mv navec_news_v1_1B_250K_300d_100q.tar ./model/navec_news_v1_1B_250K_300d_100q.tar
RUN python -m pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu
