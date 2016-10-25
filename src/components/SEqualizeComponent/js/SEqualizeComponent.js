/*
 * SEqualizeComponent.js
 * This element allows you to manage same columns height very easily
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  04.07.16
 * @updated  04.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import querySelectorLive from '../../../js/dom/querySelectorLive'
import imageLoaded from '../../../js/dom/imageLoaded';
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator';
const ResizeSensor = require('css-element-queries/src/ResizeSensor');
import __mutationObservable from '../../../js/dom/mutationObservable'

class SEqualizeComponent extends SComponent {

	/**
	 * Reference to all the columns by groups
	 * Store value format :
	 * groupId : {
	 * 		inProgress : false // set if an equalize in in progress on this group or not
	 * 		columns : [] // store all the columns
	 * }
	 */
	static groups = {};

	/**
	 * Lines stack
	 * Store values as :
	 * lineIdx : {
	 * 		height : ... // the height of the line
	 * 		columns : [] // all the columns in the line
	 * }
	 */
	lines = [];

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sEqualize') {
		super(elm, {
			group : '@',
			resizeTimeout : 200,
			...settings
		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		if ( ! SEqualizeComponent.groups[this.settings.group]) {
			SEqualizeComponent.groups[this.settings.group] = {
				refreshLinesInProgress : false,
				elements : [],
				lines : []
			};
		}
		SEqualizeComponent.groups[this.settings.group].elements = document.querySelectorAll(`[${this.componentNameDash}="${this.settings.group}"]`);

		// let mutationTimeout = null;
		// __mutationObservable(this.elm, {
		// 	childList : true,
		// 	attributes : true,
		// 	subtree : true,
		// 	attributeFilter : ['class']
		// }).subscribe((mutation) => {
		// 	if (mutation.target === this.elm) return;
		// 	console.log('mutation', this.elm, mutation);
		// 	clearTimeout(mutationTimeout);
		// 	setTimeout(() => {
		// 		this.refreshLines();
		// 		this.equalize(this.elm);
		// 	}, 200);
		// });

		// listen for all images in the column
		// querySelectorLive('img', {
		// 	rootNode : this.elm
		// }).once().subscribe((img) => {
		// 	// when the image is loaded, equalize the columns
		// 	imageLoaded(img).then(() => {
		// 		// equalize
		// 		this.equalize();
		// 	});
		// });

		// refresh lines first time
		this.refreshLines();

		// equalize
		if (this.elm === SEqualizeComponent.groups[this.settings.group].elements[SEqualizeComponent.groups[this.settings.group].elements.length - 1])
		{
			this.equalize();
		}

		// listen for resizing window
		let resizeWindowTimeout;
		window.addEventListener('resize', (e) => {
			clearTimeout(resizeWindowTimeout);
			resizeWindowTimeout = setTimeout(() => {
				this.equalize();
			},this.settings.resizeTimeout);
		});

		// setTimeout(() => {
		// 	let resizeTimeout = null;
		// 	new ResizeSensor(this.elm, () => {
		// 		clearTimeout(resizeTimeout);
		// 		resizeTimeout = setTimeout(() => {
		// 			// get the line to resize
		// 			const line = this.getLineFromElm(this.elm);
		// 			console.log('line to resize', line);
		// 			// resize the line
		// 			this.equalizeLine(line);
		// 		},100);
		//
		//
		// 		// if ( ! SEqualizeComponent.groups[this.settings.group].inProgressFromElementResize) {
		// 		// 	SEqualizeComponent.groups[this.settings.group].inProgressFromElementResize = true;
		// 		// 	clearTimeout(resizeTimeout);
		// 		// 	resizeTimeout = setTimeout(() => {
		// 		// 		console.log('resize!!!', this.elm);
		// 		// 		this.equalize();
		// 		// 		setTimeout(() => {
		// 		// 			SEqualizeComponent.groups[this.settings.group].inProgressFromElementResize = false;
		// 		// 		}, 200);
		// 		// 	}, 100);
		// 		// }
		//
		// 		// console.log(this.elm._sEqualizeTriggerer);
		// 		//
		//
		// 	});
		// }, 1000);

	}

	/**
	 * Get the line from an element
	 */
	refreshLines() {
		if (SEqualizeComponent.groups[this.settings.group].refreshLinesInProgress) return;
		SEqualizeComponent.groups[this.settings.group].refreshLinesInProgress = true;
		setTimeout(() => {
			SEqualizeComponent.groups[this.settings.group].refreshLinesInProgress = false;
		}, 100);
		// loop on all the columns
		let offsetTop;
		this.lines = [];
		let line = {
			inProgress : false,
			height : 0,
			elements : []
		};
		[].forEach.call(SEqualizeComponent.groups[this.settings.group].elements, (elm) => {
			const elmOffsetTop = elm.offsetTop;
			const elmHeight = elm.offsetHeight;
			// check if is on new line
			if (offsetTop !== elmOffsetTop && line.height > 0) {
				// add the new line to lines stack
				this.lines.push(line);
				// reset the line
				line = {
					inProgress : false,
					height : 0,
					elements : []
				};
			}
			// add the element in the line
			line.elements.push(elm);
			// check if the element is higher that the highest of the line
			if (elmHeight > line.height) {
				line.height = elmHeight;
			}
			// save the new offset
			offsetTop = elmOffsetTop;
		});

		// add the last line
		this.lines.push(line);

		// save the lins in static stack
		SEqualizeComponent.groups[this.settings.group].lines = this.lines;
	}

	/**
	 * Get line from element
	 */
	getLineFromElm(elm) {
		// loop on lines
		for(let key in SEqualizeComponent.groups[this.settings.group].lines) {
			const line = SEqualizeComponent.groups[this.settings.group].lines[key];
			if (line.elements.indexOf(elm) !== -1) return line;
		}
		return null;
	}

	/**
	 * Equalize line
	 */
	equalizeLine(line) {
		// refresh lines
		// don't worry, it will not do the work
		// every time it is called but only 1 by group every 100ms
		this.refreshLines();

		// do nothing if the line is already in progress
		if (line.inProgress) return;
		// flag the line as inProgress
		line.inProgress = true;
		// loop on each columns
		[].forEach.call(line.elements, (element) => {
			element.classList.add('clear-transmation');
			element.style.minHeight = '';
		});
		// loop on each columns
		[].forEach.call(line.elements, (element) => {
			// check if an equalizer exist to use it
			// @TODO : find a way to not query each time in the column for the equalizer
			const equalizer = element.querySelector('[s-equalizer]');
			if (equalizer) {
				// console.log('set equalizerElm', line.height - column.offsetHeight + 'px');
				equalizer.style.minHeight = line.height - element.offsetHeight + 'px';
			} else {
				element.style.minHeight = line.height + 'px';
				// column.style.maxHeight = line.height + 'px';
			}
		});
		[].forEach.call(line.elements, (element) => {
			element.classList.remove('clear-transmation');
		});
		// reset the line progress status
		setTimeout(() => {
			line.inProgress = false;
		});
	}

	/**
	 * Equalize
	 */
	equalize(elmOrLine = null) {
		// if we have an element passed
		if (elmOrLine && elmOrLine.tagName) {
			// equalize from an element
			const line = this.getLineFromElm(elmOrLine);
			if ( ! line) return;
			this.equalizeLine(line);
		} else if (elmOrLine && elmOrLine.elements) {
			// equalize a line directly
			this.equalizeLine(elmOrLine);
		} else {
			// equalize the whole set
			SEqualizeComponent.groups[this.settings.group].lines.forEach((line) => {
				// equalize line
				this.equalizeLine(line);
			});
		}
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SEqualizeComponent', (component) => {
	sTemplateIntegrator.ignore(component.elm, {
		style : true,
	});
	if (component.equalizerElm) {
		sTemplateIntegrator.ignore(component.equalizerElm, {
			style : true
		});
	}
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SEqualizeComponent = SEqualizeComponent;

// export
export default SEqualizeComponent;
