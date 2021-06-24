class Publication:
    __COUNT = 0

    def __init__(self, title: str, message: str):
        self.id = Publication.__COUNT
        Publication.__COUNT += 1

        self.title = title
        self.message = message

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'title': self.title,
            'message': self.message,
        }
