#!/bin/bash
# git pull
docker build -t bindex_pm2 --compress -f docker/pm2/Dockerfile .
docker build -t bindex_nginx --compress docker/nginx
docker stack deploy -c docker-stack.yml bindex
docker service update --force bindex_pm2
docker rmi $(docker images -a --filter "dangling=true" -q --no-trunc) --force
