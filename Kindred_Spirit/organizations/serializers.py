from rest_framework import serializers 
from .models import Organization
class organizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'
        