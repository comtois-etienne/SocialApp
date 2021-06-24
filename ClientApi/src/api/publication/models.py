from flask_restx import fields

from src.api import api_v1

__base_model = {
    'title': fields.String(required=True, example='My summer week', description='Title of your publication'),
    'message': fields.String(required=True, example='Best week of my life! 😀', description='Message of your publication'),
}

publication_payload_model = api_v1.model('PublicationPayload', __base_model)

publication_model = api_v1.model('Publication', {
    'id': fields.Integer(required=True, description='Unique ID of your publication'),
    **__base_model
})

publications_model = api_v1.model('Publications', {
    'publications': fields.Nested(publication_model, as_list=True)
})
