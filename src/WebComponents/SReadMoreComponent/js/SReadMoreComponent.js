import SWebComponent from '../../../js/core/SWebComponent'
import sMix from '../../../js/core/sMix'

export default class SReadMoreComponent extends SWebComponent {

	constructor() {
		super();
	}

	attachedCallback() {
		super.attachedCallback();
		console.log('my element attached');
	}

	attributeChangedCallback(attribute, oldVal, newVal) {
		super.attributeChangedCallback.apply(this, arguments);
		console.log('my element attribute', attribute, newVal, oldVal);
	}

	helloWorld() {
		console.log('this', this);
		console.log('hello world');
	}

}
