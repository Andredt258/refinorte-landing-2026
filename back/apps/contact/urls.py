from django.urls import path
from .views import ContactView  # Asegúrate de importar ContactView correctamente

urlpatterns = [
    path('contact/', ContactView.as_view(), name='contact'),
]
