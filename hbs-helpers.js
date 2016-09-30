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

var renderMethod = function(of) {
	var res = [];
	console.log(of);
	res = res.concat([
		'### ' + of.name,
		of.description,
		renderParams(of),
		renderSample(of)
	]);
	return res.join("\n");
}
exports.method = renderMethod;

var renderSample = function(of) {
	if ( ! of.customTags) return;
	var sample = _customTag(of, 'sample');
	var lang = _customTag(of, 'lang');
	if ( ! sample) return;
	if ( ! lang) lang = '';
	return [
		'#### Sample',
		'```language-'+ lang,
		sample,
		'```'
	].join("\n");
}
exports.sample = renderSample;

function renderParams(of) {
	if ( ! of.params) return;
	var res = [
		'',
		'Name | Type | Description | Optional | Default',
		'------------ | ------------ | ------------ | ------------ | ------------'
	];
	of.params.forEach(function(param) {
		var def = '';
		if (param.defaultvalue) {
			def = param.defaultvalue;
		}
		var optional = 'optional';
		if ( ! param.optional) {
			optional = 'required';
		}
		res = res.concat([
			param.name + ' | **'+_types(param.type)+'** | ' + param.description + ' | ' + optional + '| ' + def
		]);
	});
	res.push('');
	return res.join("\n");
}
exports.params = renderParams;

function renderConstructor(of) {
	console.log(of);
	return [
		'### Constructor',
		of.description,
		renderParams(of)
	].join("\n");
}
exports.constructor = renderConstructor;

function renderSettings(of) {
	var res = [];
	res = res.concat([
		'Name | Type | Description | Default',
		'------------ | ------------ | ------------ | ------------'
	]);
	for(let key in of) {
		var d = of[key];
		if ( ! d.customTags) continue;
		d.customTags.forEach(function(tag) {
			if (tag.tag === 'setting') {
				res.push(d.name + ' | **' + _types(d.type) + '** | ' + d.description + ' | ' + d.defaultvalue);
			}
		});
	}
	return res.join("\n");
}
exports.settings = renderSettings;
