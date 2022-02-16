from django.db import models

# Create your models here.
class Birth(models.Model):
    name = models.CharField(max_length=500)
    image = models.CharField(max_length=500)
    date = models.DateField()