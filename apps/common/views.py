from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.reverse import reverse


# class TodosViewAll(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer

# @api_view(['GET'])
# @permission_classes((permissions.AllowAny,))
# def api_root(request, format=None):
#     return Response({
#         'users': reverse('user-list', request=request, format=format),
#         'todos': reverse('todo-list', request=request, format=format),
#         'statuses': reverse('status-list', request=request, format=format)
#     })
