from rest_framework import viewsets

from .models import Todo
from .serializers import TodoSerializers


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by('id')
    serializer_class = TodoSerializers
