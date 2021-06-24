from flask_restx import Resource

from src.api import api_v1


@api_v1.route('/test')
class Publication(Resource):
    def get(self):
        """
        Get all pods that run on your matchmaker
        """
        return {

        }