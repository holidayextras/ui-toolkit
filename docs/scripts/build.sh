#!/bin/bash
ulimit -n 9999
echo "Building docs"
browserify -t [ reactify --extension '.jsx' ] ./client.js -o ./public/assets/bundle.js
