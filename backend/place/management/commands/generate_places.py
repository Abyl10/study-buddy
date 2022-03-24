import logging
from typing import Dict

from rest_framework import status
import requests
from django.core.management.base import BaseCommand

from place.models import Place

logger = logging.getLogger(__name__)


class GoogleException(Exception):
    pass


class BadRequestGoogleException(GoogleException):
    pass


class UnauthorizedRequestException(GoogleException):
    pass


class InternalGoogleException(GoogleException):
    pass


class Command(BaseCommand):
    help = "Get places in radius of latlng."

    def _handle_errors(self, response) -> Dict:

        if response.ok:
            return response.json()

        exceptions = {
            status.HTTP_400_BAD_REQUEST: BadRequestGoogleException,
            status.HTTP_401_UNAUTHORIZED: UnauthorizedRequestException,
        }
        message = f"Wrong response code: {response.status_code}, body: {response.text}"
        print(message)

        exception_class = exceptions.get(
            response.status_code, InternalGoogleException
        )
        raise exception_class(message)

    def add_arguments(self, parser):
        parser.add_argument(
            "--latlng",
            type=str,
            default="51.0905303,71.3959759",
            help="Lattitude and longitude for center of the point.",
        )
        parser.add_argument(
            "--radius",
            type=str,
            default="500",
            help="Search places in this radius.",
        )
        parser.add_argument(
            "--type",
            type=str,
            default="university",
            help="Type of the place to get.",
        )

    def handle(self, *args, **options):

        latlng = options["latlng"]
        radius = options["radius"]
        type = options["type"]

        url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
        headers = {
            "Content-Type": "application/json; charset=utf-8",
        }
        params = {
            "location": latlng,
            "radius": radius,
            "type": type,
            "key": "AIzaSyD1cKR0WsDjGWzkcUXsUQRB_IhBfAvxH04"
        }

        response = requests.get(
            url=url,
            headers=headers,
            params=params,
        )

        parsed = self._handle_errors(response)
        if 'results' not in parsed:
            return
        results = parsed['results']
        places = Place.objects.all()
        for result in results:
            name = result['name']
            lat = result['geometry']['location']['lat']
            lng = result['geometry']['location']['lng']
            if not places.filter(name=name).count():
                place = Place(
                    name=name,
                    verified=True,
                    lat=lat,
                    lng=lng,
                )
                place.save()
