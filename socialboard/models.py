from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=120, null=False)
    publish_date = models.DateTimeField("date published")
    content = models.CharField(max_length=500, null=False)
    author = models.CharField(max_length=24, null=False)


def __str__(self):
    return self.post

