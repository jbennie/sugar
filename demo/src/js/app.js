import 'babel-polyfill'
import SWebComponent from '../../../js/core/SWebComponent'
import toggleFullscreen from '../../../js/dom/toggleFullscreen'
import detectInOutDirection from '../../../js/dom/detectInOutDirection'
import addAnimationClass from '../../../js/dom/addAnimationClass'
import imagesLoaded from '../../../js/dom/imagesLoaded'
import appendStylesheetLink from '../../../js/dom/appendStylesheetLink'
import linkLoaded from '../../../js/dom/linkLoaded'

import appendScriptTag from '../../../js/dom/appendScriptTag'
import scriptLoaded from '../../../js/dom/scriptLoaded'

// const $link = appendStylesheetLink('http://coffeekraken.io/dist/css/style.css');
// linkLoaded($link).then(() => {
// 	console.log('link loaded')
// })

// const $script = appendScriptTag('http://coffeekraken.io/dist/js/app.js');
// scriptLoaded($script).then(() => {
// 	console.log('script loaded')
// })

// imagesLoaded(document.querySelectorAll('img')).then(() => {
// 	console.log('loaded')
// })

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

const detectInOutDirectionElm = document.querySelector('#detectInOutDirection')
detectInOutDirection(detectInOutDirectionElm, (direction, elm) => {
	addAnimationClass(elm, `in-${direction}`)
}, (direction, elm) => {
	addAnimationClass(elm, `in-${direction}`)
})

const fullscreenElm = document.querySelector('#fullscreen')
fullscreenElm.addEventListener('click', (e) => {
	toggleFullscreen(fullscreenElm)
})
