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
		'-----------------------------',
		'## API',
		'-----------------------------',
		''
	];
	let areMethods = false;
	for(let i=0; i<data.length; i++) {
		const tag = data[i];
		if (tag.class) continue;
		if (tag.private) continue;
		if (tag.constructor === true) continue;
		if (tag.type) continue;
		areMethods = true;
		res.push(renderMethod(tag));
	}
	if ( ! areMethods) return;
	res.push('');
	return res.join("\n");
});


function renderMethod(of) {
	var res = [];

	let title = of.name + '(' + renderInlineParams(of) + ')';
	if (of.return) {
		title += ' : ' + of.return.type;
	}
	if (of.static) {
		title = `static ${title}`;
	}

	res = res.concat([
		'### ' + title,
		of.body,
		(of.protected) ? '- Privacy : **Protected**' : (of.private) ? '- Privacy : **Private**' : '- Privacy : **Public**',
		(of.static) ? '- **Static**' : '',
		renderReturn(of),
		renderParams(of),
		renderExample(of)
	]);
	return res.join("\n");
}
Handlebars.registerHelper('method', renderMethod);

Handlebars.registerHelper('class', (data) => {
	let cls = _.find(data, (item) => item.class !== undefined);
	if ( ! cls) return;
 	let res = [
		`# ${cls.class.name}`,
		cls.class.body,
		renderConstructor(data)
	];
	if (cls.class.extends) {
		res.push(`- Extends **${cls.class.extends}**`);
	}
	if (cls.author) {
		res.push(`- Author **${cls.author}**`);
	}
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
	return [
		'',
		'#### Sample',
		'```'+ of.example.language,
		of.example.body,
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
		'- Return : **' + of.return.type + '** : ' + of.return.description
	].join("\n");
}

/**
 * Inline params
 */
function renderInlineParams(of) {
	if ( ! of.params) return '';
	let res = [];
	of.params.forEach(function(param) {
		let def = '';
		if (param.default) {
			def = param.default;
		}
		let paramString = `${param.type} ${param.name}`;
		if (def) {
			paramString += ` = ${def}`;
		}
		res.push(paramString);
	});
	if ( ! res.length) return '';
	return res.join(', ');
}
Handlebars.registerHelper('inlineParams', renderInlineParams);

/**
 * Params
 */
function renderParams(of) {
	if ( ! of.params) return;
	var res = [
		'',
		'Name | Type | Description | Status | Default',
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
	if ( ! constr) return '';
	const params = renderParams(constr);
	if ( ! params) return ''
	return [
		'-----------------------------',
		'## Constructor',
		'-----------------------------',
		'',
		constr.description,
		params
	].join("\n");
}
Handlebars.registerHelper('constructor', renderConstructor);

/**
 * Settings
 */
Handlebars.registerHelper('settings', (data) => {
	var res = [
		'-----------------------------',
		'## Settings',
		'-----------------------------',
		''
	];
	let _hasSettings = false;
	for(let i=0; i<data.length; i++) {
		const tag = data[i];
		if ( ! tag.setting) continue;
		_hasSettings = true;

		let name = `${tag.type} ${tag.name}`;
		if (tag.default) {
			name += ` = ${tag.default}`;
		}

		res = res.concat([
			'### ' + name
		]);
		if (tag.body) {
			res.push(tag.body);
		}
		res.push('');
	}
	if ( ! _hasSettings) return;
	return res.join("\n");
});


/**
 * Properties
 */
Handlebars.registerHelper('properties', (data) => {
	var res = [
		'-----------------------------',
		'## Properties',
		'-----------------------------',
		''
	];
	let _hasProperties = false;
	for(let i=0; i<data.length; i++) {
		const tag = data[i];
		if ( ! tag.type) continue;
		if ( tag.private) continue;
		if ( tag.setting) continue;
		_hasProperties = true;

		let name = `${tag.type} ${tag.name}`;
		if (tag.default) {
			name += ` = ${tag.default}`;
		}

		res = res.concat([
			'### ' + name
		]);
		if (tag.body) {
			res.push(tag.body);
		}
		res.push('');
	}
	if ( ! _hasProperties) return;
	return res.join("\n");
});


export default Handlebars
