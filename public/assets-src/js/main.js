require('prismjs');

import SSelectComponent from '../../../src/components/SSelectComponent';
import SActivateComponent from '../../../src/components/SActivateComponent';
import SValidateComponent from '../../../src/components/SValidateComponent'
import __querySelectorLive from '../../../src/js/dom/querySelectorLive';

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
