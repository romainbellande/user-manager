FROM nginx:alpine

LABEL Romain Bellande

RUN apk update
RUN apk add git
# Install rc-service
RUN apk add openrc --no-cache
# Setup script
ADD setup.sh .
RUN chmod +x setup.sh
# Genpasswd script
ADD genpasswd.sh .
RUN chmod +x genpasswd.sh
RUN apk add apache2-utils
# Install zsh
RUN apk add zsh
RUN apk add curl
RUN apk add bash
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

# Install client
WORKDIR /var/www

EXPOSE 80

CMD ./setup.sh
