const readline = require('readline');
const fs = require('fs');
const _extend = require('lodash/merge');
const __upperFirst = require('../src/js/utils/string/upperFirst').default;

const _docblockBoolean = function(name, splits, data) {
	data[name] = true;
}
const _docblockOneSplit = function(name, splits, data) {
	data[name] = splits[0];
}
const _docblockTypeSplit = function(name, splits, data) {
	data[name] = splits[0];
}
const _docblockParamSplit = function(name, splits, data) {
	if ( ! data.params) data.params = [];

 let def = undefined;
 let _name = splits[1];
 let _optional = false;
 let _param = {};
 if (_name.substr(0,1) === '[' && _name.substr(-1) === ']') {
	 const defSplit = _name.substr(1,_name.length-2).split('=');
	 def = defSplit[1];
	 _name = defSplit[0];
 }

 if (def) {
	 _optional = true;
 }

 _param = {
		name : _name,
		type : __upperFirst(splits[0]),
		description : splits[2],
		optional : _optional
	};
	if (def !== undefined) {
		_param.default = def;
	}
	data.params.push(_param);
}
const _docblockClassSplit = function(name, splits, data) {
	data.class = {
		name : splits[0],
		extends : splits[1]
	};
}
const _docblockReturnSplit = function(name, splits, data) {
	data.return = {
		type : __upperFirst(splits[0]),
		description : splits[1]
	};
}
const _docblockExampleSplit = function(name, splits, data, language) {
	data.example = {
		language : splits[0] || language
	}
}

const _docblockNextLineAnalyzerScss = function(line, data) {
	// process the line
	line = line.trim();
	if ( ! line) return;

	// mixin
	if (line.match('@mixin')) {
		data.mixin = true;
	}
	// function
	if (line.match('@function')) {
		data.func = true;
	}

	if ( ! data.name) {
		const _l = line.replace('(',' ').replace(')',' ');
		const splits = _l.split(/\s+/);
		// find the name
		for (let i=0; i<splits.length; i++) {
			const val = splits[i];
			if (val !== '@function'
				&& val !== '@class'
			) {
				// it's the name
				data.name = val;
				break;
			}
		}
	}

	// protected, private, etc...
	if ( data.name.substr(0,1) === '_'
		&& data.public === undefined
		&& data.protected === undefined
		&& data.private === undefined) {
		data.private = true;
	}
}

const _docblockNextLineAnalyzerJs = function(line, data) {
	// process the line
	line = line.trim();
	if ( ! line) return;

	// static
	if (line.indexOf('static ') !== -1) {
		data.static = true;
	}

	// name
	if ( ! data.name) {
		const _l = line.replace('(',' ').replace(')',' ');
		const splits = _l.split(/\s+/);
		// find the name
		for (let i=0; i<splits.length; i++) {
			const val = splits[i];
			if (val !== 'function'
				&& val !== 'class'
				&& val !== 'default'
				&& val !== 'export'
				&& val !== 'extends'
				&& val !== 'import'
				&& val !== 'static'
				&& val !== 'set'
				&& ! val.match('.prototype.')
			) {
				// it's the name
				data.name = val;
				break;
			}
		}
	}

	// protected, private, etc...
	if ( data.name.substr(0,1) === '_'
		&& data.public === undefined
		&& data.protected === undefined
		&& data.private === undefined) {
		data.private = true;
	}
}

export default function(file, cb, settings = {}) {
	let res = [];
	let data = {};
	let inBlock = false;
	let currentTag = null;
	let currentTagValue = [];
	let _analyzeNextLine = false;

	let _language = require("path").extname(file.path).substr(1);

	// extends settings
	settings = _extend({
		tags : {
			"@constructor" : _docblockBoolean,
			"@deprecated" : _docblockBoolean,
			"@private" : _docblockBoolean,
			"@public" : _docblockBoolean,
			"@protected" : _docblockBoolean,
			"@override" : _docblockBoolean,
			"@interface" : _docblockBoolean,
			"@inheritDoc" : _docblockBoolean,
			"@nosideeffects" : _docblockBoolean,
			"@setting" : _docblockBoolean,
			"@const" : _docblockBoolean,
			"@expose" : _docblockBoolean,
			"@class" : _docblockClassSplit,
			"@name" : _docblockOneSplit,
			"@author" : _docblockOneSplit,
			"@extends" : _docblockOneSplit,
			"@type" : _docblockTypeSplit,
			"@implements" : _docblockOneSplit,
			"@this" : _docblockOneSplit,
			"@lang" : _docblockOneSplit,
			"@default" : _docblockOneSplit,
			"@param" : _docblockParamSplit,
			"@return" : _docblockReturnSplit,
			"@example" : _docblockExampleSplit
		},
		nextLineAnalyzer : {
			js : _docblockNextLineAnalyzerJs,
			scss : _docblockNextLineAnalyzerScss
		},
		types : {
			js : {
				"HTMLElement" : 'https://developer.mozilla.org/fr/docs/Web/API/HTMLElement',
				"HTMLLinkElement" : 'https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement',
				"String" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String',
				"Array" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array',
				"Object" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object',
				"Function" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function',
				"Boolean" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean',
				"Data" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date',
				"Error" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error',
				"JSON" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON',
				"Map" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map',
				"Math" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math',
				"NaN" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/NaN',
				"Number" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number',
				"Promise" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise',
				"Proxy" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy',
				"RegExp" : 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp'
			}
		}
	}, settings);

	let lineReader = readline.createInterface({
		input: fs.createReadStream(file.path)
	});

	lineReader.on('line', function(line) {

	// if the line is the first line
	// after a docblock
	if (_analyzeNextLine) {
		if (settings.nextLineAnalyzer
			&& settings.nextLineAnalyzer[_language]) {
			settings.nextLineAnalyzer[_language](line, data);
		}
		_analyzeNextLine = false;
		return;
	}

	// if we have a new block
	if (line.trim() === '/**') {
		data = {};
		inBlock = true;
		return;
	} else if (line.trim() === '*/') {

		// if we have already a currentTag
		// mean that we have finished to process it
		// and need to add it into result json
		// before handle the next one
		if (currentTag) {
			// check if we have a currentTagValue
			// for the currentTag
			// to add it has a body
			if (currentTagValue.length) {
				if (typeof(data[currentTag]) === 'object') {
					data[currentTag].body = currentTagValue.join("\n");
				} else {
					data.body = currentTagValue.join("\n");
				}
			}
			// set the current tag
			currentTagValue = [];
		}


		// we are at the end of the block
		// so we add the data to the res json
		// and reset some variables
		res.push(data);
		inBlock = false;
		currentTag = null;
		currentTagValue = [];
		// set that we can analyze the next line
		_analyzeNextLine = true;
		// stop here
		return;
	}

	// if we are not in a docblock
	// we do nothing....
	if (!inBlock) {
		return;
	}

	// process line
	const rawLine = line;
	line = line.trim().substr(1).trim().replace(/\t+/g, "\t");

	// transform types definition by links in the line
	if (settings.types[_language]) {
		line = line.replace(/\{[a-zA-Z]+\}/g, (type) => {
			const name = type.replace('{','').replace('}','');
			const url = settings.types[_language][name];
			if (url) {
				if (url.toLowerCase().match(/^https?:\/\//)) {
					return `{ <a class="link" href="${url}" target="_blank" title="${name}">${name}</a> }`;
				} else {
					return `{ [${name}](${settings.types[_language][name]}) }`;
				}
			}
			return `{ ${name} }`;
		});
	}

	// check if the line is a tag one
	if (line.substr(0,1) === '@') {

		// if we have already a currentTag
		// mean that we have finished to process it
		// and need to add it into result json
		// before handle the next one
		if (currentTag && currentTagValue.length) {
			// check if we have a currentTagValue
			// for the currentTag
			// to add it has a body
			if (typeof(data[currentTag]) === 'object') {
				data[currentTag].body = currentTagValue.join("\n");
			} else {
				data.body = currentTagValue.join("\n");
			}
			// set the current tag
			currentTagValue = [];
		}

		// split the line by tabs
		const splits = line.split(/\t/).map((item) => {
			return item.trim();
		});
		// get the tag name
		let name = splits[0].trim().substr(1);
		 // unshift the name of the splits
		splits.shift();
		// process the line
		if (settings.tags[`@${name}`]) {
			settings.tags[`@${name}`](name, splits, data, _language);
		} else {
			// we do not handle this tag name
			return;
		}

		currentTag = name;

		return;
	} else {
		// the line is not a tag one
		currentTagValue.push(rawLine.trim().replace(/^\t*\*\s?/,''));
		if ( ! currentTag) {
			currentTag = 'description';
		}
	}
	});
	lineReader.on('close', function() {
	return cb(res);
	});
};
