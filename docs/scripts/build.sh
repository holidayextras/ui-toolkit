#!/bin/bash
ulimit -n 9999
echo "Building docs"
browserify -t [ babelify ] ./client.js -o ./public/assets/bundle.js
