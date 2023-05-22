from django.db import models
from django.contrib.auth.models import usuario

class Usuario(models.Model):
    email = models.EmailField()
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=8)

    class Meta:
        app_label = 'streams'

class Video(models.Model):
    usuario = models.CharField(max_length=30)
    imagen = models.ImageField(upload_to='videos/')
    fecha_publicacion = models.DateField(auto_now_add=True)

    class Meta:
        app_label = 'streams'

class Comentarios(models.Model):
    username = models.CharField(max_length=20)
    comentario = models.CharField(max_length=250)
    id_video = models.ForeignKey(Video, on_delete=models.CASCADE, null=True)

    class Meta:
        app_label = 'streams'