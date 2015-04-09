#!/bin/bash
echo "Building docs"
browserify -t [ reactify --extension '.jsx' ] ./client.js -o ./assets/bundle.js
