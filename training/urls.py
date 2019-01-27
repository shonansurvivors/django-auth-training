from django.urls import path, include
from django.views.generic import TemplateView
from .views import PostListView, PostCreateView, PostUpdateView

urlpatterns = [
    path('', PostListView.as_view(), name='home'),
    path('post/<int:pk>/', PostUpdateView.as_view(), name='post_update'),
    path('post/', PostCreateView.as_view(), name='post_create'),
    path('accounts/', include('allauth.urls')),
]
