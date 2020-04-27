#!/bin/sh
brew upgrade
brew install node
brew install watchman
brew install git
brew install go
brew install yarn
brew install flow
brew install cocoapods
brew install coreutils
brew install maven
brew cask install android-sdk
brew cask install homebrew/cask-versions/adoptopenjdk8
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

