require('prismjs');
require('prismjs/components/prism-scss');

import SSelectComponent from '../../../src/components/SSelectComponent';
import SActivateComponent from '../../../src/components/SActivateComponent';
import SValidateComponent from '../../../src/components/SValidateComponent';
import STrianglifyComponent from '../../../src/components/STrianglifyComponent';
import SAddthisComponent from '../../../src/components/SAddthisComponent';
import SDrawerComponent from '../../../src/components/SDrawerComponent';
import SRippleComponent from '../../../src/components/SRippleComponent';

import __querySelectorLive from '../../../src/js/dom/querySelectorLive';
import sSettings from '../../../src/js/core/sSettings';
import __domReady from '../../../src/js/dom/domReady';
import SColor from '../../../src/js/core/SColor';

__domReady().then(() => {

	// s-activate
	__querySelectorLive('[s-toggle]').once().subscribe((elm) => {
		new SActivateComponent(elm, {
			toggle : true,
			history : false
		}, 'sToggle');
	});

	// s-drawer
	__querySelectorLive('[s-drawer]').once().subscribe((elm) => {
		new SDrawerComponent(elm);
	});

	// s-addthis
	__querySelectorLive('[s-addthis]').once().subscribe((elm) => {
		new SAddthisComponent(elm);
	});

	// s-select
	__querySelectorLive('[s-select]').once().subscribe((elm) => {
		new SSelectComponent(elm);
	});

	// s-ripple
	// __querySelectorLive('.topbar__links .nav__item').once().mouseover().subscribe((elm) => {
	// 	new SRippleComponent(elm, {
	// 		contains : false,
	// 		centered : true
	// 	});
	// });
	new SRippleComponent(document.querySelector('[s-drawer-content]'), {
		contains : false
	});
	// __querySelectorLive('[s-ripple],.btn').once().mouseover().subscribe((elm) => {
	// 	new SRippleComponent(elm);
	// });

	// s-trianglify
	__querySelectorLive('[s-drawer-content] h2,.btn').once().subscribe((elm) => {
		elm.style.position = 'relative';
		const trianglify = document.createElement('div');
		trianglify.setAttribute('s-trianglify', true);
		elm.appendChild(trianglify);
	});
	__querySelectorLive('[s-trianglify]').once().subscribe((elm) => {
		new STrianglifyComponent(elm, {
			cellSize :200,
			xColors : ['#000','#fff'],
			yColors : ['#000','#fff']
		});
	});

});
