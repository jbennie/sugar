import Handlebars from 'handlebars'
import _ from 'lodash'

function _types(types) {
	return types.names.map(function(t) {
		return t.charAt(0).toUpperCase() + t.slice(1);
	}).join(', ');
}
function _find(findIn, cb) {
	if (findIn instanceof Array) {
		for(var i=0; i<findIn.length; i++) {
			if (cb(findIn[i])) return findIn[i];
		}
	} else {
		for (var key in findIn) {
			if (cb(findIn[key])) return findIn[key];
		}
	}
	return null;
}
function _customTag(of, name) {
	var tag = _find(of.customTags, function(item) { return item.tag === name });
	if (tag) return tag.value;
}

Handlebars.registerHelper('methods', (data) => {
	let res = [
		'## API',
		''
	];
	for(let i=0; i<data.length; i++) {
		const tag = data[i];
		if (tag.private) continue;
		if (tag.constructor === true) continue;
		if (tag.type) continue;
		if (tag.public) {
			res.push(renderMethod(tag));
		}
	}
	res.push('');
	return res.join("\n");
});


function renderMethod(of) {
	var res = [];
	res = res.concat([
		'### ' + of.name,
		of.description,
		renderParams(of),
		renderReturn(of),
		renderExample(of)
	]);
	return res.join("\n");
}
Handlebars.registerHelper('method', renderMethod);

Handlebars.registerHelper('class', (data) => {
	let cls = _.find(data, (item) => item.class !== undefined);
 	let res = [
		`# ${cls.name}`,
		cls.description
	];
	if (cls.example) {
		res.push(renderExample(cls));
	}
	return res.join("\n");
});

/**
 * Example
 */
function renderExample(of) {
	if ( ! of.example) return;
	if ( ! of.lang) of.lang = '';
	return [
		'',
		'#### Sample',
		'```language-'+ of.lang,
		of.example,
		'```',
		''
	].join("\n");
}
Handlebars.registerHelper('example', renderExample);

/**
 * Return
 */
function renderReturn(of) {
	if ( ! of.return) return;
	return [
		'Return **' + of.return.type + '** ' + of.return.description
	].join("\n");
}

/**
 * Params
 */
function renderParams(of) {
	if ( ! of.params) return;
	var res = [
		'',
		'Name | Type | Description | Optional | Default',
		'------------ | ------------ | ------------ | ------------ | ------------'
	];
	of.params.forEach(function(param) {
		var def = '';
		if (param.default) {
			def = param.default;
		}
		var optional = 'optional';
		if ( ! param.optional) {
			optional = 'required';
		}
		res = res.concat([
			param.name + ' | **' + param.type +'** | ' + param.description + ' | ' + optional + ' | ' + def
		]);
	});
	res.push('');
	return res.join("\n");
}
Handlebars.registerHelper('params', renderParams);

/**
 * Constructor
 */
function renderConstructor(data) {
	const constr = _.find(data, (item) => item.constructor === true);
	if ( ! constr) return;
	return [
		'### Constructor',
		constr.description,
		'#### Parameters',
		renderParams(constr)
	].join("\n");
}
Handlebars.registerHelper('constructor', renderConstructor);

/**
 * Settings
 */
Handlebars.registerHelper('settings', (data) => {
	var res = [
		'## Settings',
		'Here\'s the available settings'
	];
	res = res.concat([
		'',
		'Name | Type | Description | Default',
		'------------ | ------------ | ------------ | ------------'
	]);
	for(let i=0; i<data.length; i++) {
		const tag = data[i];
		// console.log(tag);
		if ( ! tag.setting) continue;
		res.push(tag.name + ' | **' + tag.name + '** | ' + tag.description + ' | ' + tag.default);
	}
	return res.join("\n");
});


export default Handlebars
