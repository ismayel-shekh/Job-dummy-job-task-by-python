from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import organizationviewset

router = DefaultRouter()
router.register('', organizationviewset)

urlpatterns = [
    path('', include(router.urls)),
]
