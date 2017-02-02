from django.contrib.auth.models import User
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, permissions, viewsets
from rest_framework.decorators import api_view, permission_classes
from apps.common.filters import TodoFilter
from apps.common.models import Todo, Status, Comment
from apps.common.permissions import IsAuthorOrReadOnly, AllowedUpdateUser
from apps.common.serializers import TodoSerializer, UserSerializer, StatusSerializer, CommentSerializer


@permission_classes((permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly))
class TodoViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # filter_backends = (DjangoFilterBackend,)
    filter_class = TodoFilter

    def get_queryset(self):
        queryset = super(TodoViewSet, self).get_queryset()
        return queryset.filter(author=self.request.user if not self.request.user.is_anonymous() else None)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


@permission_classes((permissions.IsAuthenticatedOrReadOnly,))
class StatusViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Status.objects.all()
    serializer_class = StatusSerializer

    def get_queryset(self):
        queryset = super(StatusViewSet, self).get_queryset()
        return queryset.filter(author=self.request.user if not self.request.user.is_anonymous() else None)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


@permission_classes((permissions.AllowAny, AllowedUpdateUser))
class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


@permission_classes((permissions.IsAuthenticatedOrReadOnly,))
class CommentViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# @permission_classes((permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly))
# class TodosList(generics.ListCreateAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer
#
#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)
#
#
# @permission_classes((permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly))
# class TodosDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer


# @permission_classes((permissions.IsAuthenticated,))
# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#
#
# @permission_classes((permissions.IsAuthenticated,))
# class UserDetail(generics.RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# @permission_classes((permissions.AllowAny,))
# class StatusList(generics.ListCreateAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer
#
#
# @permission_classes((permissions.IsAuthenticatedOrReadOnly,))
# class StatusDetail(generics.RetrieveAPIView):
#     queryset = Status.objects.all()
#     serializer_class = StatusSerializer
