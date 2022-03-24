from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .models import Appointment


@admin.register(Appointment)
class AppointmentModelAdmin(admin.ModelAdmin):
    fields = [
        "topic",
        "subject",
        "description",
        "date",
        "time",
        "offline_mode",
        "meeting_link",
        "users",
        "place",
        "host",
    ]
    list_display = [
        "topic",
        "subject",
        "description",
        "date",
        "time",
        "offline_mode",
        "meeting_link",
        "get_users",
        "place",
        "host",
    ]

    @admin.display(description=_("Users"))
    def get_users(self, appointment) -> str:
        text = ", ".join(
            [f"{m.username}" for m in appointment.users.all()])
        return text
