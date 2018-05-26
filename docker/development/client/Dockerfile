FROM node:alpine

EXPOSE 9000

# SYSTEM
# Installs latest Chromium (64) package.
RUN apk update && apk upgrade && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk add --no-cache -u --allow-untrusted \
    zlib-dev \
    chromium@edge \
    nss@edge \
    zsh \
    bash \
    curl \
    python \
    python2 \
    gcc \
    g++ \
    make \
    git \
     xvfb \
    wait4ports \
    xorg-server \
    dbus \
    ttf-freefont \
    mesa-dri-swrast \
    grep \
    udev \
    && apk del --purge --force linux-headers binutils-gold gnupg zlib-dev libc-utils \
    && rm -rf /var/lib/apt/lists/* \
    /var/cache/apk/* \
    /usr/share/man \
    /tmp/* \
    /usr/lib/node_modules/npm/man \
    /usr/lib/node_modules/npm/doc \
    /usr/lib/node_modules/npm/html \
    /usr/lib/node_modules/npm/scripts

ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/
# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

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


# APPLICATION
WORKDIR /srv/app
ADD package.json .
ADD yarn.lock .
RUN yarn
ADD client client

WORKDIR /srv/app/client
RUN yarn
RUN npm rebuild node-sass
RUN npm run test:intall:unit

CMD [ "npm", "start" ]
