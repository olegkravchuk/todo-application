from django.contrib import admin
from apps.common.models import *


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1


class TodoAdmin(admin.ModelAdmin):
    inlines = [CommentInline]


admin.site.register(Todo, TodoAdmin)
admin.site.register(Status)
