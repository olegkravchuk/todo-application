# coding=utf-8
from django.db import models


class Status(models.Model):
    name = models.CharField(max_length=100, verbose_name=u'Название')
    code = models.CharField(max_length=100, verbose_name=u'Код')
    author = models.ForeignKey('auth.User', related_name='statuses', verbose_name=u'Автор')

    class Meta:
        verbose_name = u'Статусы'
        verbose_name_plural = u'Статус'

    def __str__(self):
        return self.name


class Todo(models.Model):
    name = models.CharField(max_length=255, verbose_name=u'Название')
    status = models.ForeignKey(Status, verbose_name=u'Статус')
    created = models.DateTimeField(verbose_name=u'Созданно', auto_now_add=True)
    author = models.ForeignKey('auth.User', related_name='todos', verbose_name=u'Автор')

    class Meta:
        verbose_name = u'Работы'
        verbose_name_plural = u'Работа'

    def __str__(self):
        return self.name


class Comment(models.Model):
    todo = models.ForeignKey(Todo, related_name='comments', verbose_name=u'Работа')
    text = models.TextField(verbose_name=u'Коментарий')
    created = models.DateTimeField(verbose_name=u'Созданно', auto_now_add=True)

    class Meta:
        verbose_name = u'Комментарии'
        verbose_name_plural = u'Комментарий'

    def __str__(self):
        return self.text
