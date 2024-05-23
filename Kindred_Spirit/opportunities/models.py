from django.db import models

from organizations.models import Organization
class Opportunity(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255)
    required_skills = models.TextField()
    image = models.ImageField(upload_to='opportunities/image/')
    organization = models.ForeignKey(Organization, related_name='opportunities', on_delete=models.CASCADE)

    def __str__(self):
        return self.title