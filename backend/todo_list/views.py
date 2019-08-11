from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.cache.mixins import CacheResponseMixin

from .models import Todo
from .serializers import TodoSerializers


class TodoViewSet(CacheResponseMixin, ModelViewSet):
    queryset = Todo.objects.all().order_by('id')
    serializer_class = TodoSerializers
