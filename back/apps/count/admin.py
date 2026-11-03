from django.contrib import admin
from .models import PageView
from unfold.admin import ModelAdmin
from unfold.contrib.import_export.admin import ExportActionModelAdmin
# Register your models here.

@admin.register(PageView)
class PageViewAdmin(ModelAdmin,ExportActionModelAdmin):
		list_display = ['ip_address', 'user_agent', 'timestamp']
		search_fields = ['ip_address', 'user_agent']
		list_filter = ['timestamp']
		list_per_page = 10
		ordering = ['-timestamp']

