from django.shortcuts import render
from rest_framework import viewsets
from .models import Organization
from .serializers import organizationSerializer

class organizationviewset(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = organizationSerializer
