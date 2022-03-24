from django.db import models


class User(models.Model):
    username = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False)
    password = models.CharField(max_length=50)
    ifLogged = models.BooleanField(default=False)

    def __str__(self):
        return "{} -{}".format(self.username, self.email)
