#!/usr/bin/env bash

# Update/Upgrade the box
sudo apt-get update
sudo apt-get upgrade -y

# Install Ruby & Essentials
gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable --ruby=2.1.2
source /home/vagrant/.rvm/scripts/rvm

# Install Bundler
gem install bundler

# Install Jekyll (specific for DW)
gem install jekyll 

# Install Node.js and NPM
# sudo apt-get install nodejs npm -y
# npm update -g npm
# sudo ln -s /usr/bin/nodejs /usr/bin/node

# Install Bower
# sudo npm install -g bower

# Install Bower and Gems
# cd /vagrant
# bower install --config.interactive=false
# bundle install

# Configure bash
echo "alias ll='ls -gFaltr'" >> ~/.bashrc
echo "export PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\] \[\033[01;34m\]\w \$\[\033[00m\] '" >> ~/.bashrc
echo "alias serve='bundle exec middleman --force-polling'" >> ~/.bashrc
source ~/.bashrc