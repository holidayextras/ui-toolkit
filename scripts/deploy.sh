#!/bin/bash

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g')
PREVIOUS_PACKAGE_VERSION=$(git show HEAD^:package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g')

if [ "$PACKAGE_VERSION" != "$PREVIOUS_PACKAGE_VERSION" ]
then
  # grunt deploy
  echo 'Going to deploy'
fi
