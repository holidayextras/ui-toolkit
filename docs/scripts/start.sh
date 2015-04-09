#!/bin/bash
echo "Starting & supervising server.js"
supervisor -q -i node_modules server.js
