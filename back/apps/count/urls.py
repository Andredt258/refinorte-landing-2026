from django.urls import path
from .views import PageViewCountView
urlpatterns = [
		path('api/page-views/', PageViewCountView.as_view(), name='page-view-count'),
]
