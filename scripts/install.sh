#!/bin/bash

if [[ $PWD == *"/node_modules/coffeekraken-sugar/scripts"* ]]
then
	cd ../
fi

if [[ $PWD == *"/node_modules/coffeekraken-sugar"* ]]
then
	# move src
	mv dist/js/ js/
	mv src/sass/ sass/
	mv dist/components/ components/
	mv dist/webcomponents/ webcomponents/

	# clean repo
	rm -rf src
	rm -rf *.html
	rm -rf *.php
	rm -rf pages
	rm -rf .sass-cache
	rm -rf assets
	rm -rf config.rb
	rm -rf favicon.ico
	rm -rf .DS_Store
	rm -rf *.coffee
	rm -rf scripts
	rm -rf bower.json
fi
