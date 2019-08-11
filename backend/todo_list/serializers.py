from rest_framework.serializers import ModelSerializer
from rest_framework_extensions.serializers import PartialUpdateSerializerMixin

from .models import Todo


class TodoSerializers(PartialUpdateSerializerMixin, ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'content', 'completed')
