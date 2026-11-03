from django.db import models
import uuid
class PageView(models.Model):
    ip_address = models.CharField(max_length=255)
    user_agent = models.TextField()  # Para almacenar el user agent del navegador
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ip_address} - {self.timestamp}"
