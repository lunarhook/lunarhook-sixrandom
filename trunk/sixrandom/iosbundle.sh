#!/bin/sh
cd /Applications/svn/sixrandom/sixrandom/
react-native bundle --entry-file ./index.ios.js --bundle-output ./ios/bundle/index.ios.jsbundle --platform ios --assets-dest ./ios/bundle --dev false