// import "webcomponents.js/webcomponents-lite";
import TestComponent from './components/TestComponent'


setTimeout(() => {
	const comp = new TestComponent();
	console.log('comp', comp);
	document.body.appendChild(comp);
	// document.body.appendChild(document.createElement('button', 'test-component'));

}, 2000);


// // extends some different native constructor
// class MyButton extends HTMLButtonElement {
// 	constructor() {
// 		super();
// 		console.log('coco', this);
// 	}
// }
//
// // define it specifying what's extending
// customElements.define('my-button', MyButton, {extends: 'button'});
//
// // <button is="my-button">click me</button>
// document.body.appendChild(
//   new MyButton
// ).textContent = 'click me';
