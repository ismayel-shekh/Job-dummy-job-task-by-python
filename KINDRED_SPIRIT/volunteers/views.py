from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from .models import VolunteerRegistration
from .serializers import VolunteerRegistrationSerializer

class joingingopportunity(filters.BaseFilterBackend):
    def filter_queryset(self, request, query_set, view):
        opportunity_id = request.query_params.get("opportunity_id")
        if opportunity_id == 'null':
            return query_set.none()
        if opportunity_id:
            return query_set.filter(opportunity = opportunity_id)
        return query_set
class VolunteerRegistratrionViewSet(viewsets.ModelViewSet):
    queryset = VolunteerRegistration.objects.all()
    serializer_class = VolunteerRegistrationSerializer
    filter_backends = [joingingopportunity]
 #    permission_classes = [IsAuthenticated]