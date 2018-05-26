#!/bin/sh

if [ "$USER" = "" ]
then
  echo "You must set USER environment variable"
  exit 1
fi

if [ "$PASSWD" = "" ]
then
  echo "You must set PASSWD environment variable"
  exit 1
fi
htpasswd -c -b /etc/nginx/.htpasswd $USER $PASSWD
nginx -g "daemon off;"
