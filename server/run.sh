#!/bin/bash	
virtualenv flask
cd flask
source bin/activate
pip3 install -U flask-cors
cd '[PATH TO DIRECTOTY]/WikiDist-task/server'
python3 wiki.py
