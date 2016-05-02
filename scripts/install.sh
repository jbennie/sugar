#!/bin/bash

# move src
mv src/js/sugar/ js/
mv src/sass/sugar/ sass/

# clean repo
rm -rf src
rm -rf *.html
rm -rf pages
rm -rf assets
rm -rf config.rb
rm -rf favicon.ico &&
-rf .DS_Store