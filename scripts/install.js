const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

if (process.env.PWD.match(/node_modules/)) {
	// move sources
	fse.removeSync('sass');
	fse.moveSync('src/sass','sass');

	// clean repo
	fse.removeSync('_toMigrate');
	fse.removeSync('demo');
	fse.removeSync('dist');
	fse.removeSync('scripts');
	fse.removeSync('src');
	fse.removeSync('tests');
	fse.removeSync('.sass-cache');
	fse.removeSync('.babelrc');
	fse.removeSync('.changelogrc');
	fse.removeSync('.DS_Store');
	fse.removeSync('.editorconfig');
	fse.removeSync('.node-version');
	fse.removeSync('.travis.yml');
	fse.removeSync('favicon.ico');
	fse.removeSync('karma.conf.js');
	fse.removeSync('webpack.config.js');

	// update sass files at root
	fs.writeFileSync('_index.scss', '@import "sass/sugar";');
}

