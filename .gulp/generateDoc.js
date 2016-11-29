const __gulp = require('gulp');
const __gutil = require('gulp-util');
const __readdirRecursive = require('fs-readdir-recursive');
const __path = require('path');
const __fs = require('fs');
const __docblockParser = require('../../../npm/docblock-parser/index').default;
const __docblockParserToMarkdown = require('../../../npm/docblock-parser-to-markdown/index').default;

const __handlebars = require('./doc/handlebars.config').default;
const __ent = require('ent');
const __gulpRename = require('gulp-rename');
const __gulpCached = require('gulp-cached');
const __gulpEach = require('gulp-each');

export default function(cwd, files, destination) {
	const types = {};
	__readdirRecursive(cwd).forEach((path) => {
		const basename = __path.basename(path),
			  fileName = basename.slice(0,-3);
		if (/^[A-Z]/.test(fileName)) {
			types[fileName] = `${cwd}${path}`;
		}
	});
	return __gulp.src(`${cwd}${files}`)
		.pipe(__gulpCached(cwd))
		.pipe(__gulpEach(function(content, file, cb) {
			__docblockParser.parse(file.path, {
				types : {
					js : Object.assign(types, {
						Observable : 'https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md'
					})
				}
			}, (json) => {
				const res = __docblockParserToMarkdown.toMarkdown(json);
				cb(null, res);
			});
		}))
		.pipe(__gulpRename((path) => {
			path.extname = '.md';
		}))
		.pipe(__gulp.dest(destination));
}
