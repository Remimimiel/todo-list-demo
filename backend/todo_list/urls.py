from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register('todo', views.TodoViewSet, base_name='todo')
urlpatterns = router.urls
