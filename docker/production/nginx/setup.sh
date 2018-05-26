#!/bin/sh
printf "%s" "waiting for pm2 ..."
while ! ping -c 1 -n -w 1 'pm2' &> /dev/null
do
    printf "%c" "."
done
printf "%s" "connection succeed !"
nginx -g "daemon off;"
# exec ./genpasswd.sh
