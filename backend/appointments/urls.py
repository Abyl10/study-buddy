from django.urls import path
from views import CreateAppointment

urlpatterns = [
    path('create_appointment/', CreateAppointment.as_view(),
         name="create_appointment"),
]
