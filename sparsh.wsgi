#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/sparsh-2k18/")

from FlaskApp import app as application
application.secret_key = 'Datanerd@123'
