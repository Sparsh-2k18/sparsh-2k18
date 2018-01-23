# config.py
"""Python script for selecting kind of database."""

import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
sqlite_uri = 'sqlite:///' +  os.path.join(BASE_DIR, 'database.db')

# postgresql_uri ='dialect+driver://username:password@host:port/database'
postgresql_uri = 'postgresql://postgres:root@localhost:5432/gamecatalog'

default_database_uri = sqlite_uri

def get_database_uri():
    """Returns the database_uri."""

    return default_database_uri
