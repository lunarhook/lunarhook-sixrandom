#!/bin/sh
basepath=$(cd `dirname $0`; pwd)
node node_modules/react-native/local-cli/cli.js bundle --entry-file ./index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --platform android --assets-dest ./android/app/src/main/res/ --dev false --max-workers 6 --verbose
node node_modules/react-native/local-cli/cli.js bundle --entry-file ./index.js --bundle-output ./ios/main.jsbundle --platform ios --assets-dest ./ios/bundle --dev false --max-workers 6 --verbose