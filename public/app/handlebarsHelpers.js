const __md5 = require('md5');

let path;
const menuLevel = (three, currentUrl) => {
	let res = '';
	let newDir = true;
	for(let key in three) {
		const value = three[key];
		if (typeof(value) === 'object'
			&& ! value.filename
		) {
			if (newDir) {
				path += `/${key}`;
				newDir = false;
			}

			let p = path;
			p = p.split('/');
			p.pop();
			p.push(key);
			p = p.join('/');

			let active = '';
			if (currentUrl.match(p)) {
				active = 'active';
			}
			// console.log(path);
			res += `<li class="list__item list__item--toggle ${active}" s-toggle -group="${Math.round(Math.random()*9999999999)}">${key}</li>`;
			res += '<ul class="list list--sidemenu">';
			res += menuLevel(value, currentUrl);
			res += '</ul>';
		} else {
			// console.log(value.dirname);
			path = value.dirname.replace('./','').replace('.','');
			let active = '';
			if (currentUrl.match(value.path)) {
				active = 'active';
			}
			res += `<li class="list__item">
				<a href="/${value.path}" class="${active}" title="${value.name}">${value.name}</a>
			</li>`;
			// res.push(`<li>${value}</li>`);
		}
	}
	return res;
}

/**
 * Menu
 */
exports.menu = (three, currentUrl) => {
	const res = menuLevel(three, currentUrl);
	return `<ul class="list list--sidemenu">
		${res}
	</ul>`;
}

/**
 * Gravatar
 */
exports.gravatarUrl = (email) => {
	return `https://www.gravatar.com/avatar/${__md5(email)}`;
}
