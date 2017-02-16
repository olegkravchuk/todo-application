from django.contrib.auth.models import User
from rest_framework import serializers, viewsets, routers, permissions
from rest_framework.decorators import permission_classes
from rest_framework.exceptions import NotFound
from apps.common.models import Todo, Status, Comment
from apps.common.permissions import AllowedUpdateUser
from rest_framework_jwt.settings import api_settings


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('id', 'name', 'code')


class CommentSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField(source='todo.author')
    todo = serializers.PrimaryKeyRelatedField(queryset=Todo.objects.all())
    # todo = TodoSerializer()

    class Meta:
        model = Comment
        fields = ('url', 'id', 'text', 'created', 'todo')

    # def __init__(self, *args, **kwargs):
    #     user = kwargs['context']['request'].user
    #     super(CommentSerializer, self).__init__(*args, **kwargs)
    #     self.fields['todo'].queryset = Todo.objects.filter(author=user)


class StatusField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        serializer = StatusSerializer(Status.objects.get(id=value.pk))
        return serializer.data


class TodoSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    status = StatusField(read_only=True)
    # status = StatusSerializer()
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Todo
        fields = ['url', 'id', 'name', 'description', 'created', 'status', 'author', 'comments']


class UserSerializer(serializers.ModelSerializer):
    jwt = serializers.SerializerMethodField('get_token_jwt')

    def get_token_jwt(self, obj):
        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'email', 'password', 'jwt')
        extra_kwargs = {"password":
                            {"write_only": True}
                        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance
