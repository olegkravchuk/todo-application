from django.contrib.auth.models import User
from rest_framework import serializers, viewsets, routers, permissions
from rest_framework.decorators import permission_classes
from rest_framework.exceptions import NotFound
from apps.common.models import Todo, Status, Comment
from apps.common.permissions import AllowedUpdateUser


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ('url', 'id', 'name', 'code')


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


class TodoSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    # status = serializers.PrimaryKeyRelatedField(queryset=Status.objects.all())
    status = StatusSerializer()
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Todo
        fields = ['url', 'id', 'name', 'created', 'status', 'author', 'comments']

    def create(self, validated_data):
        # Override default `.create()` method in order to properly add `status` into the model
        status_data = validated_data.pop('status')
        try:
            status_obj = Status.objects.get(**status_data)
        except Status.DoesNotExist:
            raise NotFound
        todo = Todo.objects.create(status=status_obj, **validated_data)
        return todo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'email', 'password')
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