from django.db import models
from organizations.models import Organization
from opportunities.models import Opportunity
from django.contrib.auth.models import User
# Create your models here.
class VolunteerRegistration(models.Model):
    opportunity = models.ForeignKey(Opportunity, on_delete=models.CASCADE)
    volunteer = models.ForeignKey(User, on_delete=models.CASCADE)
    Registration_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')],
    default='pending'                    
     )
    
    def __str__(self) -> str:
        return self.volunteer.username
