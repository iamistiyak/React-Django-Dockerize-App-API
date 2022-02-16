from django.contrib import admin
from .models import Birth
# Register your models here.
@admin.register(Birth)

class BirthModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'date', 'image']
