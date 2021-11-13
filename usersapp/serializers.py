from rest_framework.serializers import HyperlinkedModelSerializer

from usersapp.models import TodoUser


class TodoUserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = TodoUser
        # fields = ['username', 'firstname', 'lastname', 'email']
        fields = '__all__'
