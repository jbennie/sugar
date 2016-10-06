let path;
const menuLevel = (three, currentUrl) => {
	let res = '';
	for(let key in three) {
		const value = three[key];
		if (typeof(value) === 'object'
			&& ! value.filename
		) {
			let active = '';
			if (currentUrl.indexOf(path) !== -1) {
				active = 'active';
			}
			console.log(path);
			res += `<li class="list__item list__item--toggle ${active}" s-toggle -group="${Math.round(Math.random()*9999999999)}">${key}</li>`;
			res += '<ul class="list list--sidemenu">';
			res += menuLevel(value, currentUrl);
			res += '</ul>'
		} else {
			// console.log(value.dirname);
			path = value.dirname;
			res += `<li class="list__item">
				<a href="/${value.path}" title="${value.name}">${value.name}</a>
			</li>`;
			// res.push(`<li>${value}</li>`);
		}
	}
	return res;
}

exports.menu = (three, currentUrl) => {
	const res = menuLevel(three, currentUrl, '');
	return `<ul class="list list--sidemenu">
		${res}
	</ul>`;
}
