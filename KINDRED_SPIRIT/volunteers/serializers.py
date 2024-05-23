from rest_framework import serializers
from .models import VolunteerRegistration

class VolunteerRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerRegistration
        fields = '__all__'