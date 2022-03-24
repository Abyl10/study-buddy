from rest_framework import generics
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from models import Appointment


class CreateAppointment(generics.CreateAPIView):
    queryset = Appointment.objects.all()