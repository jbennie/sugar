const __getTypes = require('./app/getTypes');
const __parseMarkdown = require('./app/parseMarkdown');
const _get = require('lodash/get');
const _set = require('lodash/set');
const express = require('express');
const exphbs= require('express-handlebars');
const __handlebarsHelpers = require('./app/handlebarsHelpers');
const readdirRecursive = require('fs-readdir-recursive');
const __path = require('path');
const __fs = require('fs');
const app = express();

const three = {};
let files = [];

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static files
app.use('/assets', express.static('assets'));

app.use((req, res, next) => {
	if (/^\/assets\//.test(req.url)) return;

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

	const types = __getTypes(files);

	// read the markdown content
	const content = __fs.readFileSync(`../doc${docFile}`,'utf8');

	res.render('home', {
		helpers : __handlebarsHelpers,
		three,
		files,
		team : {
			title : 'Meet our team',
			intro : `Sugar is a poweful toolkit, but it's a team before all. Here's who's behind your favorite toolkit!`,
			members : [{
				name : 'Olivier Bossel',
				role : 'Lead sugar developer',
				description : `Passionate interactive web designer from Switzerland.
	To be always in research of new design trends, technologies and user interaction is my primary motivation.`,
				email : 'olivier.bossel@gmail.com',
				links : [{
					title : 'Facebook',
					icon : 'facebook',
					url : 'http://facebook.com'
				}, {
					title : 'Twitter',
					icon : 'twitter-bird',
					url : 'http://twitter.com'
				}]
			}, {
				name : 'Olivier Bossel',
				role : 'Lead sugar developer',
				description : `Passionate interactive web designer from Switzerland.
	To be always in research of new design trends, technologies and user interaction is my primary motivation.`,
				email : 'olivier.bossel@gmail.com',
				links : [{
					title : 'Facebook',
					icon : 'facebook',
					url : 'http://facebook.com'
				}, {
					title : 'Twitter',
					icon : 'twitter-bird',
					url : 'http://twitter.com'
				}]
			}, {
				name : 'Olivier Bossel',
				role : 'Lead sugar developer',
				description : `Passionate interactive web designer from Switzerland.
	To be always in research of new design trends, technologies and user interaction is my primary motivation.`,
				email : 'olivier.bossel@gmail.com',
				links : [{
					title : 'Facebook',
					icon : 'facebook',
					url : 'http://facebook.com'
				}, {
					title : 'Twitter',
					icon : 'twitter-bird',
					url : 'http://twitter.com'
				}]
			}, {
				name : 'Olivier Bossel',
				role : 'Lead sugar developer',
				description : `Passionate interactive web designer from Switzerland.
	To be always in research of new design trends, technologies and user interaction is my primary motivation.`,
				email : 'olivier.bossel@gmail.com',
				links : [{
					title : 'Facebook',
					icon : 'facebook',
					url : 'http://facebook.com'
				}, {
					title : 'Twitter',
					icon : 'twitter-bird',
					url : 'http://twitter.com'
				}]
			}]
		},
		currentUrl : req.url,
		content : __parseMarkdown(content, types)
	});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
