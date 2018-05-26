FROM node:alpine

EXPOSE 3000
EXPOSE 5432

# system
RUN apk update
RUN apk add zsh
RUN apk add bash
RUN apk add curl
RUN apk add python
RUN apk add python2
RUN apk add gcc
RUN apk add g++
RUN apk add make
RUN apk add git
RUN bash -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" \
    && sed -i -- 's/robbyrussell/wezm+/g' /root/.zshrc \
    && echo "source /root/.oh-my-zsh/oh-my-zsh.sh" >> ~/.zshrc \
    && echo "plugins=(git)" >> ~/.zshrc

RUN echo 'export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:$HOME/.composer/vendor/bin:$PATH' >> ~/.bashrc \
    && echo 'export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:$HOME/.composer/vendor/bin:$PATH' >> ~/.zshrc \
    && echo "alias sf='bin/console'" >> ~/.bashrc \
    && echo "alias ls='ls --color'" >> ~/.bashrc \
    && echo "alias ll='ls -l'" >> ~/.bashrc \
    && echo "alias la='ls -la'" >> ~/.bashrc

# application
WORKDIR /srv/app
ADD package.json .
ADD yarn.lock .
RUN yarn
ADD server server

WORKDIR /srv/app/server
RUN yarn

CMD [ "npm", "start" ]
