from django.contrib import admin
from unfold.admin import ModelAdmin
from django.utils.html import format_html
# Register your models here.
from .models import *
from unfold.contrib.forms.widgets import WysiwygWidget
@admin.register(Post)
class PostAdminClass(ModelAdmin):
  list_display = ('title', 'author', 'status', 'published')
  list_filter = ('status', 'author', 'published')
  search_fields = ('title', 'content')
  prepopulated_fields = {'slug': ('title',)}
  date_hierarchy = 'published'
  ordering = ('status', 'published')




@admin.register(ViewCount)
class ViewCountAdminClass(ModelAdmin):
  list_display = ('post', 'ip_address')
  list_filter = ('post', 'ip_address')
  search_fields = ('post__title', 'ip_address')
