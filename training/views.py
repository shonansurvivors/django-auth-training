from django.views.generic import ListView, CreateView, UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Post
from .forms import PostForms


class PostListView(ListView):
    model = Post
    ordering = '-created_at'
    template_name = 'home.html'


class PostCreateView(CreateView, LoginRequiredMixin):
    model = Post
    form_class = PostForms
    template_name = 'training/post_create.html'
    success_url = '/'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(PostCreateView, self).form_valid(form)


class PostUpdateView(UpdateView, LoginRequiredMixin):
    model = Post
    form_class = PostForms
    template_name = 'training/post_update.html'
    success_url = '/'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(PostUpdateView, self).form_valid(form)
