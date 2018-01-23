# database_setup.py
"""Python script for creating the database."""

from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

from database.config import get_database_uri

Base = declarative_base()


class Contact(Base):
    __tablename__ = 'contact'

    id = Column(Integer, primary_key=True)
    name = Column(String(128), nullable=False)
    email = Column(String(256), nullable=False)
    mobile = Column(String(16), nullable=True)
    query = Column(Text, nullable=False)

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'mobile': self.mobile,
            'query': self.query
        }


engine = create_engine(get_database_uri())
Base.metadata.create_all(engine)
