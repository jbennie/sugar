import mustache from 'mustache';
import SWatcher from './SWatcher';
import uniqid from '../tools/uniqid';
import morphdom from 'morphdom';
import domReady from '../dom/domReady';

export default class STemplate {

	/**
	 * templateClassId
	 * Store a uniq id that will be used as identifier for
	 * this particular class in the window.sTemplateClasses
	 */
	templateClassId = null;

	/**
	 * refs
	 */
	refs = {};

	/**
	 * dom
	 * Store the reference to the created dom structure
	 */
	dom = null;

	/**
	 * Links
	 */
	bindings = {};

	/**
	 * Update timeout
	 */
	updateTimeout = null;

	rendered = false;

	/**
	 * Constructor
	 */
	constructor(template, data = {}) {

		// save in instance
		this.template = template;
		this.data = data;

		// bound the class into the window to be apple to call it into
		// templates
		if ( ! window.sTemplateDataObjects) window.sTemplateDataObjects = {};
		this.templateClassId = `s-template-${uniqid()}`;
		window.sTemplateDataObjects[this.templateClassId] = this.data;

		// instanciate a watcher
		this.watcher = new SWatcher();

		// watch each data
		for (let name in this.data) {
			const value = this.data[name];
			this.watcher.watch(this.data, name, (newVal, oldVal) => {
				// make update only once
				// by waiting next loop
				clearTimeout(this.updateTimeout);
				this.updateTimeout = setTimeout(() => {
					// render the template again
					this.render();
				});
			});
		}

		// create the container
		this.dom = document.createElement('div');

		// let dom1 = document.createElement('div');
		// dom1.className = 'coco';
		// let dom2 = document.createElement('div');
		// dom2.className = 'yop';
		// dom2.appendChild(dom1);
		//
		// let coco = morphdom(this.dom, dom2);
		// console.log(coco);

		// render first time
		this.render();
	}

	/**
	 * Render the template
	 */
	render() {
		let rendered = mustache.render(this.template, this.data);
		// rendered = rendered.replace(/(\t|\r\n|\n|\r)/gm,"");
		// process rendered template
		// rendered = this.processOutput(rendered);
		// set the new html
		console.log(rendered.trim());
		if ( ! this.rendered) {
			this.dom.innerHTML = rendered;
			this.rendered = true;
		} else {
			morphdom(this.dom, rendered.trim());
			//morphdom(rendered.trim(), this.dom);
		}
		console.log('coco', this.dom);
		//this.dom.innerHTML = rendered;
		// this.dom = this.dom.querySelector(':scope > *:first-child');
		// update refs
		this.updateRefs();
	}

	/**
	 * Update references
	 */
	updateRefs() {
		// reset refs
		this.refs = {};
		// save the element itself
		this.refs.elm = this.dom;
		// search for name and id's
		[].forEach.call(this.dom.querySelectorAll('[id],[name]'), (elm) => {
			// get the id or name
			const id = elm.id || elm.getAttribute('name');
			// save the reference
			this.refs[id] = elm;
		});
	}

	/**
	 * Append to
	 */
	appendTo(element) {
		element.appendChild(this.dom);
	}

	/**
	 * Remove the template from the dom
	 */
	remove() {
		this.dom.parentNode.removeChild(this.dom);
	}

	/**
	 * Process output
	 */
	processOutput(renderedTemplate) {
		let ret = renderedTemplate;


		// replace all the this. with the proper window.sTemplateDataObjects reference
		const thisDotReg = new RegExp('this\\.','g');
		ret = ret.replace(thisDotReg, `window.sTemplateDataObjects['${this.templateClassId}'].`);
		// element regexp
		const dollarElementReg = new RegExp('\\$element','g');
		ret = ret.replace(dollarElementReg, 'this');


		// select reg
		// let match = null;
		// const modelReg = new RegExp(' model="([^"]*)"','g');
		// const optionsReg = new RegExp('(<option\\b[^>]*>[\\s\\S]*?<\\/option>)','gm');
		// const selectReg = new RegExp('(<select\\b[^>]*>[\\s\\S]*?<\\/select>)','gm');
		// ret = ret.replace(selectReg, (item) => {
		//
		// 	let model = null;
		//
		// 	// manage model
		// 	item = item.replace(modelReg, (itm) => {
		// 		const value = itm.split('"')[1];
		// 		model = eval(value);
		// 		return ` onChange="${value} = this.value"`;
		// 	});
		//
		// 	// manage selected value
		// 	item = item.replace(optionsReg, (opt) => {
		// 		const value = opt.match(/value="(.*)"/);
		// 		opt = opt.replace('selected','');
		// 		if (value && value[1]) {
		// 			if (value[1] === model) {
		// 				opt = opt.replace('<option', '<option selected');
		// 			}
		// 		}
		// 		return opt;
		// 	});
		//
		// 	return item;
		// });


		// const optionReg = new RegExp('<option ','g');
		// return the processed template
		return ret;
	}

}
