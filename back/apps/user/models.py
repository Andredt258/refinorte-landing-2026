from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
import uuid
from django.utils import timezone


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)

        if UserAccount.objects.filter(username=extra_fields.get("username")).exists():
            print("Username already exists")
            raise ValueError("A user with that username already exists.")

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.role = "Admin"
        user.verified = True
        user.save(using=self._db)

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):

    id =            models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    email =         models.EmailField(unique=True)
    username =      models.CharField(max_length=100, null=True, blank=True)
    picture =       models.ImageField(
        default="users/user_default_profile.png",
        upload_to="users/pictures/",
        blank=True,
        null=True,
        verbose_name="Picture",
    )
    banner =        models.ImageField(
        default="users/user_default_bg.jpg",
        upload_to="users/pictures/",
        blank=True,
        null=True,
        verbose_name="Banner",
    )

    first_name =    models.CharField(max_length=100)
    last_name =     models.CharField(max_length=100)
    is_active =     models.BooleanField(default=True)
    is_staff =      models.BooleanField(default=False)

    verified =      models.BooleanField(default=False)

    assigned =      models.ForeignKey('self', related_name='children', null=True, blank=True, on_delete=models.SET_NULL)
    is_editor = 		models.BooleanField(default=False)
    date_joined =   models.DateTimeField(default=timezone.now)
    updated_at =    models.DateTimeField(auto_now=True)

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","last_name"]

    def __str__(self):
        return self.email
