from rest_framework.viewsets import ModelViewSet

from usersapp.models import TodoUser
from usersapp.serializers import TodoUserModelSerializer


class TodoUserModelViewSet(ModelViewSet):
    queryset = TodoUser.objects.all()
    serializer_class = TodoUserModelSerializer
