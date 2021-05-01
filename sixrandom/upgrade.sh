#!/bin/sh
brew upgrade
brew install adoptopenjdk8
brew install apr
brew install apr-util
brew install clang-format
brew install cocoapods
brew install coreutils
brew tap dart-lang/dart
brew install dart
brew install gettext
brew install git
brew install go
brew install httpd
brew install icu4c
brew install kubernetes-cli
brew install maven
brew install node
brew install nghttp2
brew install nginx
brew install openjdk
brew install pcre
brew install pcre2
brew install readline
brew install sqlite
brew install watchman
brew install yarn
brew install ideviceinstaller ios-webkit-debug-proxy
brew install --cask android-sdk
brew install --cask homebrew/cask-versions/adoptopenjdk8
brew cleanup
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
yarn global add react-native-cli
npm install -g npm-check-updates
git pull
ncu -u -x react-native
yarn global add @tarojs/cli@latest
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
yarn
cd ios
pod install
cd ..

