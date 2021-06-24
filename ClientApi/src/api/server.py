from flask import Flask
from flask_restx import Api

from .namespaces import api_v1


class SocialAppApi:
    def __init__(self, host: str, port: int):
        self.__host = host
        self.__port = port
        self.__app = Flask(__name__)
        self.__register_api()

    def __register_api(self):
        api = Api(
            title='SocialApp',
            version='1.0',
            description='',
        )
        api.add_namespace(api_v1)
        api.init_app(self.__app)

    def run(self):
        self.__app.run(host=self.__host, port=self.__port)


