from django.utils.translation import gettext_lazy as _
from unfold.admin import ModelAdmin
from django.db.models import TextChoices
from .models import UserAccount
from django.contrib import admin
from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.decorators import display
from django.contrib.auth.admin import GroupAdmin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
admin.site.unregister(Group)

@admin.register(Group)
class GroupAdmin(GroupAdmin, ModelAdmin):
	pass

class UserStatus(TextChoices):
	ACTIVE = 'True', _('Active')
	INACTIVE = 'False', _('Inactive')

@admin.register(UserAccount)
class UserAccountAdmin(BaseUserAdmin,ModelAdmin):
	form = UserChangeForm
	add_form = UserCreationForm
	change_password_form = AdminPasswordChangeForm
	ordering = ['id']
	list_display = ['user', 'is_active', 'is_staff', 'verified',]
	list_filter = ['is_active', 'is_staff', 'verified']
	fieldsets = (
		(None, {'fields': ('email', 'password', 'username', 'picture', 'banner')}),
		(_('Personal Info'), {'fields': ('first_name', 'last_name')}),
		(
			_('Permissions'),
			{
				'fields': (
					'is_active',
					'is_staff',
					'verified',
					'is_superuser',
					'groups',
					'user_permissions',
				)
			},
		),
		(_('Important dates'), {'fields': ('last_login', 'date_joined')}),
		(_('Hierarchy'), {'fields': ('assigned',)}),
	)
	add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "username", "password1", "password2"),
            },
        ),
    )
	search_fields = ['email', 'first_name', 'last_name']
	ordering = ['email']

	@display(header=True)
	def user(self, obj):
		initials = f"{obj.first_name[0].upper()}{obj.last_name[0].upper()}"
		return f"{obj.first_name} {obj.last_name}", f"{obj.email}", initials
