require('prismjs');

import SSelectComponent from '../../../src/components/SSelectComponent';
import SActivateComponent from '../../../src/components/SActivateComponent';
import SValidateComponent from '../../../src/components/SValidateComponent'
import STrianglifyComponent from '../../../src/components/STrianglifyComponent'
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

	// s-select
	__querySelectorLive('[s-select]').once().subscribe((elm) => {
		new SSelectComponent(elm);
	});

	// s-trianglify
	__querySelectorLive('h2,.btn').once().subscribe((elm) => {
		elm.style.position = 'relative';
		const trianglify = document.createElement('div');
		trianglify.setAttribute('s-trianglify', true);
		elm.appendChild(trianglify);
	});
	__querySelectorLive('[s-trianglify]').once().subscribe((elm) => {
		let color = sSettings.colors.primary.color,
			light = new SColor(color).spin(20).toHex(),
			dark = new SColor(color).toHex();
		console.log('datk', dark, light);
		new STrianglifyComponent(elm, {
			x_colors : ['#000','#fff'],
			y_colors : ['#000','#fff']
		});
	});

});
