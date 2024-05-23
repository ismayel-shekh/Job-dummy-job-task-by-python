from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=255)
    mission = models.TextField()
    contact_info = models.TextField()

    def __str__(salf):
        return salf.name
    
