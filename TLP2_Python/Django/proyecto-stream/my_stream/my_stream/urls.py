from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('',include('streams.urls')),
    path('admin/', admin.site.urls),
]
