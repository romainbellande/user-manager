FROM mhart/alpine-node:latest

LABEL Romain Bellande

ENV TERM=xterm

WORKDIR /srv/app
ADD . .
# Install system dependencies
RUN apk update
RUN apk add yarn
RUN apk add git
# Install pm2
RUN npm install -g pm2
# Install app dependencies
RUN yarn
RUN npm run dist

EXPOSE $PORT
# Actual script to start can be overridden from `docker run`
CMD ["pm2", "start", "process.yml", "--no-daemon"]

