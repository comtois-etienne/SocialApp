from typing import Iterator, List, Optional

from src.core import Publication


class PublicationManager:
    __publications: List[Publication] = []

    def add_publication(self, publication: Publication):
        self.__publications.append(publication)

    def delete_publication(self, publication_id: str):
        index = next((i for i, p in enumerate(self.__publications) if p.id == publication_id), None)

        if index is not None:
            self.__publications.pop(index)

    def get_publication_by_id(self, publication_id: str) -> Optional[Publication]:
        return next((p for p in self.__publications if p.id == publication_id), None)

    def get_all_publications(self) -> Iterator[Publication]:
        return self.__publications
