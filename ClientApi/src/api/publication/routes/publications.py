from flask import request
from flask_restx import Resource

from src.api import api_v1
from src.core import Publication as PublicationModel

from ..models import publication_payload_model, publication_model, publications_model

_publications = []


@api_v1.route('/publications')
class PublicationCR(Resource):
    @api_v1.response(200, 'Success', publications_model)
    def get(self):
        return list(map(lambda p: p.to_dict(), _publications))

    @api_v1.response(200, 'Success', publication_model)
    @api_v1.expect(publication_payload_model, validate=True)
    def post(self):
        data = request.json

        publication = PublicationModel(data['title'], data['message'])

        _publications.append(publication)

        return publication.to_dict()


@api_v1.route('/publications/<int:pk>')
class PublicationRUD(Resource):
    @api_v1.response(200, 'Success', publication_model)
    def get(self, pk):
        publication: PublicationModel = next(filter(lambda p: p.id == pk, _publications), None)

        if publication is None:
            return None, 404

        return publication.to_dict()

    def delete(self, pk):
        publication: PublicationModel = next(filter(lambda p: p.id == pk, _publications), None)

        if publication is None:
            return None, 404

        _publications.remove(publication)

        return '', 204
