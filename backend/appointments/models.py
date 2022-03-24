from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from backend.users.models import User
from django.core.exceptions import ValidationError
import datetime


class Appointment(models.Model):
    name = models.CharField(max_length=20)
    subject = models.CharField(max_length=50)
    description = models.CharField(max_length=1000)
    date = models.DateTimeField()
    duration = models.IntegerField(validators=[MaxValueValidator(86400), MinValueValidator(1)])
    users = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    mode = models.BooleanField(default=False)
    link = models.CharField(max_length=255, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.date < datetime.date.today():
            raise ValidationError("The date cannot be in the past!")
        super(Appointment, self).save(*args, **kwargs)
