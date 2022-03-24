from django.db.models import Q  # for queries
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from django.core.exceptions import ValidationError
from uuid import uuid4


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(max_length=20)

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'password'
        )


class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        # user,email,password validator
        username = data.get("username", None)
        password = data.get("password", None)
        if not username and not password:
            raise ValidationError("Details not entered.")
        user = None
        # if the email has been passed
        if '@' in username:
            user = User.objects.filter(
                Q(email=username) &
                Q(password=password)
            ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = User.objects.get(email=username)
        else:
            user = User.objects.filter(
                Q(username=username) &
                Q(password=password)
            ).distinct()
            if not user.exists():
                raise ValidationError("User credentials are not correct.")
            user = User.objects.get(username=username)
        if user.ifLogged:
            raise ValidationError("User already logged in.")
        user.ifLogged = True
        user.save()
        return data

    class Meta:
        model = User
        fields = (
            'username',
            'password',
        )


class UserLogoutSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        username = data.get("username", None)
        print(username)
        user = None
        try:
            user = User.objects.get(username=username)
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = User
        fields = ('status', 'username')
