from rest_framework import serializers
from .models import Birth

class BirthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Birth
        fields = ['id', 'name', 'date', 'image']
        