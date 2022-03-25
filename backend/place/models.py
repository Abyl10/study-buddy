from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=255, null=False)
    info_link = models.CharField(max_length=255, null=True)
    verified = models.BooleanField(default=False)
    lat = models.DecimalField(max_digits=20, decimal_places=10)
    lng = models.DecimalField(max_digits=20, decimal_places=10)

    def __str__(self):
        return self.name
