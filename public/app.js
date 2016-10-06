const _get = require('lodash/get');
const _set = require('lodash/set');
const express = require('express');
const exphbs  = require('express-handlebars');
const __helpers = require('./helpers');
const readdirRecursive = require('fs-readdir-recursive');
const __path = require('path');
const __fs = require('fs');
const app = express();
const __marked = require('marked');
const three = {};
let files = [];

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static files
app.use('/assets', express.static('assets'));

app.use((req, res, next) => {

	files = readdirRecursive('../doc/');
	files.forEach((path, i) => {

		const dirname = __path.dirname(path),
			  basename = __path.basename(path),
			  dirnameDot = dirname.replace(/\//g,'.');
		let value = _get(three, dirnameDot);

		// if (req.url.indexOf(path) !== -1) {
		// 	console.log(path);
		// }
		if (dirnameDot === '.') {
			three[basename] = {
				filename : basename,
				name : basename.slice(0, -3),
				dirname,
				path,
				active : req.url.indexOf(path) !== -1
			};
			return;
		}

		if ( ! value) {
			_set(three, dirnameDot, {});
			value = _get(three, dirnameDot);
		}

		value[basename] = {
			filename : basename,
			name : basename.slice(0, -3),
			dirname,
			path,
			active : req.url.indexOf(path) !== -1
		};

	});

	// console.log(three);
	next();
});

app.get(/.*/, function (req, res) {

	if (req.url.match('.js.map')) return;

	let docFile = req.url;
	if (req.url === '/') {
		docFile = '/README.md';
	}

	// read the markdown content
	const content = __fs.readFileSync(`../doc${docFile}`,'utf8');

  res.render('home', {
	  helpers : __helpers,
	  three,
	  files,
	  currentUrl : req.url,
	  content : __marked(content)
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
