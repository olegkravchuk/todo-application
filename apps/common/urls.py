from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
from rest_framework.urlpatterns import format_suffix_patterns
# from  import views
from apps.common.api import *
# from apps.common.views import api_root

schema_view = get_schema_view(title='Pastebin API')

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'todos', TodoViewSet)
router.register(r'users', UserViewSet)
router.register(r'statuses', StatusViewSet)
router.register(r'comments', CommentViewSet)


urlpatterns = [

    url('^schema/$', schema_view),

    url(r'^', include(router.urls)),

    # url(r'^$', api_root),
    #
    # url(r'^todos/$', TodosList.as_view(), name='todo-list'),
    # url(r'^todos/(?P<pk>[0-9]+)$', TodosDetail.as_view(), name='todo-detail'),
    #
    # url(r'^users/$', UserList.as_view(), name='user-list'),
    # url(r'^users/(?P<pk>[0-9]+)/$', UserDetail.as_view(), name='user-detail'),
    #
    # url(r'^statuses/$', StatusList.as_view(), name='status-list'),
    # url(r'^statuses/(?P<pk>[0-9]+)/$', StatusDetail.as_view(), name='status-detail'),
]

# urlpatterns = format_suffix_patterns(urlpatterns)