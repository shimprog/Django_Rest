from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from authors.views import AuthorModelViewSet
from usersapp.views import TodoUserModelViewSet

router = DefaultRouter()
router.register('authors', AuthorModelViewSet)
router.register('users', TodoUserModelViewSet)

urlpatterns = [
   path('admin/', admin.site.urls),
   path('api-auth/', include('rest_framework.urls')),
   path('api/', include(router.urls)),
]
