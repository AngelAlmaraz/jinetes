#!/bin/bash

git add .
git commit -m $1
git push remote master

npm run build
cd dist/
aws s3 sync . s3://angel.cetystijuana.com
