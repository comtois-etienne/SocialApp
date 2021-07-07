from .models import Publication
from .manager import PublicationManager

publication_manager = PublicationManager()

__all__ = [
    'Publication',
    'publication_manager',
]