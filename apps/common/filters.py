import django_filters
from apps.common.models import Todo


class TodoFilter(django_filters.rest_framework.FilterSet):
    status = django_filters.CharFilter(name="status__code")

    class Meta:
        model = Todo
        fields = ['status']
