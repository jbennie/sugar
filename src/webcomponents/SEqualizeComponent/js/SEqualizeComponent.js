import SWebComponent from '../../../js/core/SWebComponent'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SEqualizeComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			group : null,
			resizeTimeout : 200,
		}
	}

	/**
	 * Required props
	 * @definition 		SWebComponent.requiredProps
	 */
	static get requiredProps() {
		return ['group'];
	}

	/**
	 * Reference to all the columns by groups
	 * Store value format :
	 * groupId : {
	 * 		inProgress : false // set if an equalize in in progress on this group or not
	 * 		columns : [] // store all the columns
	 * }
	 */
	static groups = {};

	componentWillMount() {
		super.componentWillMount();
		this.style.display = 'block';
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		if ( ! SEqualizeComponent.groups[this.props.group]) {
			SEqualizeComponent.groups[this.props.group] = {
				refreshLinesInProgress : false,
				elements : [],
				lines : []
			};
		}
		SEqualizeComponent.groups[this.props.group].elements = document.querySelectorAll(`${this._componentNameDash}[group="${this.props.group}"]`);

		// init lines
		this.lines = [];

		// refresh lines first time
		this.refreshLines();

		// equalize
		if (this === SEqualizeComponent.groups[this.props.group].elements[SEqualizeComponent.groups[this.props.group].elements.length - 1])
		{
			this.equalize();
		}

		// listen for resizing window
		let resizeWindowTimeout;
		window.addEventListener('resize', (e) => {
			clearTimeout(resizeWindowTimeout);
			resizeWindowTimeout = setTimeout(() => {
				this.equalize();
			},this.props.resizeTimeout);
		});
	}

	get equalizerElm() {
		if (this._equalizerElmCache) return this._equalizerElmCache;
		this._equalizerElmCache = this.querySelector(`${this._componentNameDash}-equalizer`);
		return this._equalizerElmCache;
	}

	/**
	 * Get the line from an element
	 */
	refreshLines() {
		if (SEqualizeComponent.groups[this.props.group].refreshLinesInProgress) return;
		SEqualizeComponent.groups[this.props.group].refreshLinesInProgress = true;
		setTimeout(() => {
			SEqualizeComponent.groups[this.props.group].refreshLinesInProgress = false;
		}, 100);
		// loop on all the columns
		let offsetTop;
		this.lines = [];
		let line = {
			inProgress : false,
			height : 0,
			elements : []
		};
		[].forEach.call(SEqualizeComponent.groups[this.props.group].elements, (elm) => {

			// reset the equalizer or element min-height
			// to get the real height of the element
			if (elm.equalizerElm) {
				elm.equalizerElm.style.minHeight = 0;
			} else {
				elm.style.minHeight = 0;
			}

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
		SEqualizeComponent.groups[this.props.group].lines = this.lines;
	}

	/**
	 * Get line from element
	 */
	getLineFromElm(elm) {
		// loop on lines
		for(let key in SEqualizeComponent.groups[this.props.group].lines) {
			const line = SEqualizeComponent.groups[this.props.group].lines[key];
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
			element.classList.add('clear-transmations');
			// reset the equalizer or element min-height
			// to get the real height of the element
			if (element.equalizerElm) {
				element.equalizerElm.style.minHeight = 0;
			} else {
				element.style.minHeight = 0;
			}
		});
		// loop on each columns
		[].forEach.call(line.elements, (element) => {
			// check if an equalizer exist to use it
			// @TODO : find a way to not query each time in the column for the equalizer
			// reset the equalizer or element min-height
			// to get the real height of the element
			if (element.equalizerElm) {
				element.equalizerElm.style.display = 'block';
				element.equalizerElm.style.minHeight = line.height - element.offsetHeight + 'px';
			} else {
				element.style.minHeight = line.height + 'px';
			}
		});
		[].forEach.call(line.elements, (element) => {
			element.classList.remove('clear-transmations');
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
			SEqualizeComponent.groups[this.props.group].lines.forEach((line) => {
				// equalize line
				this.equalizeLine(line);
			});
		}
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SEqualizeComponent', (component) => {
	sTemplateIntegrator.ignore(component, {
		style : true,
	});
	if (component.equalizerElm) {
		sTemplateIntegrator.ignore(component.equalizerElm, {
			style : true
		});
	}
});
