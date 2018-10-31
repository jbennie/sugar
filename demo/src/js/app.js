import 'babel-polyfill'
import '@webcomponents/webcomponentsjs/bundles/webcomponents-ce'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
// import 'webcomponents.js/webcomponents-lite'
import SWebComponent from '../../../js/core/SWebComponent'

import toggleFullscreen from '../../../js/dom/toggleFullscreen'

class MyComponentClass extends SWebComponent {

	static get defaultProps() {
		return {
			hello: 'world'
		}
	}

	static get requiredProps() {
		return ['hello']
	}

	static get physicalProps() {
		return ['hello']
	}

	static defaultCss(componentName, componentNameDash) {
		return `${componentNameDash} { content: 'hello world'; }`
	}

}
const MyComponent = MyComponentClass.define('my-component');

setTimeout(() => {
	document.body.appendChild(new MyComponent({
		hello: 'universe'
	}));

	const elm = document.createElement('my-component');
	setTimeout(() => {
		document.body.appendChild(elm);
	}, 1000);

}, 1000);

const fullscreenElm = document.querySelector('#fullscreen')
fullscreenElm.addEventListener('click', (e) => {
	toggleFullscreen(fullscreenElm)
})
