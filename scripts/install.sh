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

	# clean repo
	rm -rf src
	rm -rf .sass-cache
	rm -rf .DS_Store
	rm -rf *.coffee
	rm -rf scripts

	# update _index.scss file import reference
	echo '@import "sass/sugar";' > _index.scss
fi
