from django.db.models import Q  # for queries
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Appointment
from django.core.exceptions import ValidationError


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
