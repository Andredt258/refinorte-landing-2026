from django.db.models import Count
from django.db.models.functions import TruncMonth
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PageViewSerializer
from .models import PageView

class PageViewCountView(APIView):
    def post(self, request, format=None):
        # Obtener la dirección IP desde el request
        ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
        if ip_address:
            ip_address = ip_address.split(',')[0]  # Si hay múltiples IPs, toma la primera
        else:
            ip_address = request.META.get('REMOTE_ADDR')  # Si no está usando proxy
        
        # Obtener el user agent desde los datos enviados por el frontend
        user_agent = request.data.get('user_agent')

        # Validar que el user agent exista
        if user_agent is None:
            return Response({'message': "Se requiere el user agent del navegador"}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar si ya existe un registro con la misma IP y user agent
        if PageView.objects.filter(ip_address=ip_address, user_agent=user_agent).exists():
            return Response({'message': "Registro ya existente"}, status=status.HTTP_200_OK)

        # Serializar los datos para guardarlos en la base de datos
        serializer = PageViewSerializer(data={'ip_address': ip_address, 'user_agent': user_agent})
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "Registro completado satisfactoriamente"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
