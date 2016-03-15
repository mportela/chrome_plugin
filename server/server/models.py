#coding:utf-8

from django.db import models


class UrlReached(models.Model):

    url = models.TextField(blank=True, null=True)
    date_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return u"%s > %s" % (self.date_time,
                             self.url)
