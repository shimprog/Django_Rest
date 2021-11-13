from django.utils.translation import ugettext_lazy as _

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import UserManager
from django.db import models


class TodoUser(AbstractBaseUser):
    username = models.CharField(_('username'), max_length=100, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    firstname = models.CharField(_('firstname'), max_length=100)
    lastname = models.CharField(_('lastname'), max_length=100)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    objects = UserManager()

    class Meta:
        verbose_name = ('user')
        verbose_name_plural = ('users')
        # db_table = 'auth_user'
        abstract = False

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
