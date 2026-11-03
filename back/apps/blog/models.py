from django.db import models
from django.utils import timezone
from apps.category.models import Category
import uuid
from django_ckeditor_5.fields import CKEditor5Field
import slugify
from django.contrib.auth import get_user_model

User = get_user_model()

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_directory, max_length=500, blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(max_length=255, blank=True, null=True)
    content = CKEditor5Field('Text', config_name='extends')
    time_read = models.IntegerField(blank=True, null=True)
    published = models.DateTimeField(default=timezone.now)
    views = models.IntegerField(default=0, blank=True)
    status = models.CharField(max_length=10, choices=options, default='draft')

    # Cambio a ManyToManyField
    categories = models.ManyToManyField(Category, blank=True)

    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)


    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
      if not self.slug:
        self.slug = slugify.slugify(self.title)
      super(Post, self).save(*args, **kwargs)

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views

    def get_status(self):
        return self.status

# La clase ViewCount permanece igual

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
