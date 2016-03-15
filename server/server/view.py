import json
from django.http import HttpResponse
from server import models

def display(request):
    return HttpResponse(models.UrlReached.objects.all().values('url','date_time'), content_type='application/json')

def process(request):

    res_dict = {"true": 1}
    name = str(request.GET.get('query'))  #  not used in this demo
    current_url = str(request.GET.get('url'))
    new_url = models.UrlReached(url=current_url)
    new_url.save()

    return HttpResponse(json.dumps(res_dict), content_type='application/json')
