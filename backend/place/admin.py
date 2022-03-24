from django.contrib import admin

from .models import Place


@admin.register(Place)
class PlaceModelAdmin(admin.ModelAdmin):
    fields = [
        "name",
        "info_link",
        "verified",
        "lat",
        "lng",
    ]
    list_display = [
        "id",
        "name",
        "verified",
        "lat",
        "lng",
    ]
