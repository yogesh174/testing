#!/bin/bash

if [ -d /var/www/testing ]
then
  cd /var/www/testing
  pm2 delete all
  rm -fr *
  rm -fr .git*
else
  echo "Empty"
fi
