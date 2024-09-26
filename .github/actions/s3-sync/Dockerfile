FROM nikolaik/python-nodejs:python3.12-nodejs22-slim

LABEL version="1.0.0"

RUN pip install --quiet --no-cache-dir awscli

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
