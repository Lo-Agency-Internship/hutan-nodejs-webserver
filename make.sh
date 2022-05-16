#!/bin/bash

if [ -f package.json ]
then

npm run start

else

echo -n "What is Your Name: "

read -r  AUTHOR





npm init -y

sed -i 's/ "author": "",/ "author": "'$AUTHOR'",/' package.json
sed -i '7i \ \   "start": "node index.js " ,' package.json

npm run start


fi

