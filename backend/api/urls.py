from django.urls import path
from  . import views
urlpatterns = [
    path('list/', views.BirthList.as_view()),
    path('create/', views.BirthCreate.as_view()),
    path('delete/<int:id>', views.BirthDestroy.as_view()),
]
