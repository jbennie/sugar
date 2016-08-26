/*
 * SEqualizeComponent.js
 * This element allows you to manage same columns height very easily
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  04.07.16
 * @updated  04.07.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import imageLoaded from '../dom/imageLoaded';

class SEqualizeComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sEqualize') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * Reference to all the columns by groups
	 * Store value format :
	 * groupId : {
	 * 		inProgress : false // set if an equalize in in progress on this group or not
	 * 		columns : [] // store all the columns
	 * }
	 */
	static columns = {};

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
	 * Equalizer element
	 * Store the element that will act as the equalizer inside the column itself
	 * This is optional and if not exist, the element height will be setted
	 */
	equalizerElm = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sEqualize') {
		super(name, elm, {
			group : '@',
			resizeTimeout : 200
		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		if ( ! SEqualizeComponent.columns[this.settings.group]) {
			SEqualizeComponent.columns[this.settings.group] = {
				inProgress : false,
				columns : []
			}
		}
		SEqualizeComponent.columns[this.settings.group].columns = document.querySelectorAll(`[${this.name_dash}="${this.settings.group}"]`);

		// try to get an equalizer element inside the column
		this.equalizerElm = this.elm.querySelector('[s-equalizer],[data-s-equalizer]');

		// listen for all images in the column
		querySelectorLive('img', {
			rootNode : this.elm
		}).once().subscribe((img) => {
			// when the image is loaded, equalize the columns
			imageLoaded(img).then(() => {
				// equalize
				this.equalize();
			});
		});

		// equalize
		if (this.elm === SEqualizeComponent.columns[this.settings.group].columns[SEqualizeComponent.columns[this.settings.group].columns.length - 1])
		{
			this.equalize();
		}

		// listen for resizing window
		let resizeTimeout;
		window.addEventListener('resize', (e) => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				this.equalize();
			},this.settings.resizeTimeout);
		});
	}

	/**
	 * Equalize
	 */
	equalize() {

		// remove animations
		this.elm.classList.add('clear-transmation');

		// check is already an equalize launched
		if ( ! SEqualizeComponent.columns[this.settings.group].inProgress) {

			// update group inProgress status
			SEqualizeComponent.columns[this.settings.group].inProgress = true;

			// reset all height
			this.lines.forEach((line) => {
				// loon on each columns
				[].forEach.call(line.columns, (column) => {
					column.style.minHeight = '';
					column.style.maxHeight = '';
				});
			});

			// loop on all the columns
			let offsetTop;
			this.lines = [];
			let line = {
				height : 0,
				columns : []
			};
			[].forEach.call(SEqualizeComponent.columns[this.settings.group].columns, (elm) => {
				const elmOffsetTop = elm.offsetTop;
				const elmHeight = elm.offsetHeight;
				// check if is on new line
				if (offsetTop !== elmOffsetTop && line.height > 0) {
					// add the new line to lines stack
					this.lines.push(line);
					// reset the line
					line = {
						height : 0,
						columns : []
					};
				}
				// add the element in the line
				line.columns.push(elm);
				// check if the element is higher that the highest of the line
				if (elmHeight > line.height) {
					line.height = elmHeight;
				}
				// save the new offset
				offsetTop = elmOffsetTop;
			});

			// add the last line
			this.lines.push(line);

			// set the height on each elements
			this.lines.forEach((line) => {
				// loon on each columns
				[].forEach.call(line.columns, (column) => {
					// check if an equalizer exist to use it
					// @TODO : find a way to not query each time in the column for the equalizer
					const equalizer = column.querySelector('[s-equalizer]');
					if (equalizer) {
						// console.log('set equalizerElm', line.height - column.offsetHeight + 'px');
						equalizer.style.height = line.height - column.offsetHeight + 'px';
					} else {
						column.style.minHeight = line.height + 'px';
						column.style.maxHeight = line.height + 'px';
					}
				});
			});

			// reset the inProgress status in the next js loop
			setTimeout(() => {
				SEqualizeComponent.columns[this.settings.group].inProgress = false;
			});

		}

		// reset animations
		this.elm.classList.remove('clear-transmation');

	}
}

// initOn
SEqualizeComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SEqualizeComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SEqualizeComponent = SEqualizeComponent;

// export
export default SEqualizeComponent;
