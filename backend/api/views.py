from .serializers import BirthSerializer
from .models import Birth
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView


# Create your views here.
class BirthList(ListAPIView):
    queryset = Birth.objects.all()
    serializer_class = BirthSerializer

class BirthCreate(CreateAPIView):
    queryset = Birth.objects.all()
    serializer_class = BirthSerializer

class BirthDestroy(DestroyAPIView):
    queryset = Birth.objects.all()
    serializer_class = BirthSerializer
    lookup_field = 'id'