from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class USERSrializer(serializers.ModelSerializer):
    # user = serializers.StringRelatedField(many=False)
    class Meta:
        model = models.User
        fields = '__all__'