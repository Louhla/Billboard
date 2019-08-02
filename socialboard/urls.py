from django.conf.urls import url
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.views import login, logout

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^logout/$', logout, name='logout'),
    url(r'^newpost$', views.newpost, name='newpost'),
]


