#!/bin/bash
echo "Building docs"
browserify -g [ reactify --extension '.jsx' ] ./client.js -o ./assets/bundle.js
