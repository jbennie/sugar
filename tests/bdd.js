import { expect } from 'chai'
import testingStack from 'coffeekraken-testing-stack';
const html = require('./fixture.html');
import 'babel-polyfill';

// preparing mocha
testingStack.mocha.injectHTML(html);
testingStack.mocha.run();

function getRefs(scope) {
	const elms = scope.querySelectorAll('[ref]');
	const refs = {};
	[].forEach.call(elms, (elm) => {
		refs[elm.getAttribute('ref')] = elm;
	});
	return refs;
}

// js/dom/attributesObservable
import __attributesObservable from '../dist/js/dom/attributesObservable'
describe('js/dom/attributeObservable', () => {
	let elm, observable;
	before((done) => {
		elm = document.querySelector('#attributesObservable');
		done();
	});
	afterEach((done) => {
		observable.unsubscribe();
		done();
	});
	it('Should detect a new attribute', (done) => {
		observable = __attributesObservable(elm).subscribe((mutation) => {
			done();
		});
		elm.setAttribute('works', true);
	});
	it('Should detect an attribute modification', (done) => {
		observable = __attributesObservable(elm).subscribe((mutation) => {
			done();
		});
		elm.setAttribute('works', false);
	});
	it('Should detect an attribute remove', (done) => {
		observable = __attributesObservable(elm).subscribe((mutation) => {
			done();
		});
		elm.removeAttribute('works');
	});
});

// js/dom/closest
import __closest from '../dist/js/dom/closest'
describe('js/dom/closest', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#closest');
		refs = getRefs(elm);
		done();
	});
	it('Should find the target from the source element', (done) => {
		const target = __closest(refs.source, '[ref="target"]');
		if (target) done();
		else done('Cannot find the target...');
	});
	it('Should not find any target from the noTarget element', (done) => {
		const target = __closest(refs.noTarget, '[ref="target"]');
		if (target) done('Has found a target...');
		else done();
	});
});

// js/dom/closestNotVisible
import __closestNotVisible from '../dist/js/dom/closestNotVisible'
describe('js/dom/closestNotVisible', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#closestNotVisible');
		refs = getRefs(elm);
		done();
	});
	it('Should find the targetVisibilityHidden from sourceVisibilityHidden', (done) => {
		const target = __closestNotVisible(refs.sourceVisibilityHidden, '[ref="targetVisibilityHidden"]');
		if (target) done();
		else done('Cannot find the target...');
	});
	it('Should find the targetDisplayNone from sourceDisplayNone', (done) => {
		const target = __closestNotVisible(refs.sourceDisplayNone, '[ref="targetDisplayNone"]');
		if (target) done();
		else done('Cannot find the target...');
	});
	it('Should find the targetOpacityZero from sourceOpacityZero', (done) => {
		const target = __closestNotVisible(refs.sourceOpacityZero, '[ref="targetOpacityZero"]');
		if (target) done();
		else done('Cannot find the target...');
	});
	it('Should not find the targetVisible from sourceVisible', (done) => {
		const target = __closestNotVisible(refs.sourceVisible, '[ref="targetVisible"]');
		if (target) done('The target has been found...');
		else done();
	});
});

// js/dom/dispatchEvent
import __dispatchEvent from '../dist/js/dom/dispatchEvent'
describe('js/dom/dispatchEvent', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#dispatchEvent');
		refs = getRefs(elm);
		done();
	});
	it('Should catch the event on the target', (done) => {
		refs.target.addEventListener('dispatchEvent-test-1', (e) => {
			done();
		});
		__dispatchEvent(refs.dispatcher, 'dispatchEvent-test-1');
	});
	it('Should catch the event on the target with the custom attached data', (done) => {
		refs.target.addEventListener('dispatchEvent-test-2', (e) => {
			if (e.detail.hello === 'world') done();
			else done('The event has been catched but the attached data is not correct...');
		});
		__dispatchEvent(refs.dispatcher, 'dispatchEvent-test-2', {
			hello : 'world'
		});
	});
});

// js/dom/domReady
import __domReady from '../dist/js/dom/domReady'
describe('js/dom/domReady', () => {
	it('Should detect when the dom is ready', (done) => {
		__domReady().then(() => {
			done();
		});
	});
});

// js/dom/getAnimationProperties
import __getAnimationProperties from '../dist/js/dom/getAnimationProperties'
describe('js/dom/getAnimationProperties', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#getAnimationProperties');
		refs = getRefs(elm);
		done();
	});
	it('Should have the "getAnimationProperties" animation defined on it', (done) => {
		const props = __getAnimationProperties(refs.animated);
		if (props.name[0] === 'getAnimationProperties') done();
		else done('The animation "getAnimationProperties" has not been detected...');
	});
	it('Should have the totalDuration property to 200ms', (done) => {
		const props = __getAnimationProperties(refs.animated);
		if (props.totalDuration === 200) done();
		else done('The animation totalDuration of the animation is : ' + props.totalDuration);
	});
});

// js/dom/getStyleProperty
import __getStyleProperty from '../dist/js/dom/getStyleProperty'
describe('js/dom/getStyleProperty', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#getStyleProperty');
		refs = getRefs(elm);
		done();
	});
	it('Should have the position property defined to absolute', (done) => {
		const position = __getStyleProperty(refs.element, 'position');
		if (position === 'absolute') done();
		else done(`The position is actually : ${position}`);
	});
	it('Should have the padding-bottom property defined to 10px', (done) => {
		const paddingBottom = __getStyleProperty(refs.element, 'padding-bottom');
		if (paddingBottom === '10px') done();
		else done(`The padding-bottom is actually : ${paddingBottom}`);
	});
});

// js/dom/getTransitionProperties
import __getTransitionProperties from '../dist/js/dom/getTransitionProperties'
describe('js/dom/getTransitionProperties', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#getTransitionProperties');
		refs = getRefs(elm);
		done();
	});
	it('Should have the transition property to border', (done) => {
		const props = __getTransitionProperties(refs.element);
		if (props.property[0] === 'border') done();
		else done('The transition property of the transition is : ' + props.property[0]);
	});
	it('Should have the totalDuration to 200ms', (done) => {
		const props = __getTransitionProperties(refs.element);
		if (props.totalDuration === 200) done();
		else done('The transition totalDuration of the transition is : ' + props.totalDuration);
	});
});

// js/dom/getTranslateProperties
import __getTranslateProperties from '../dist/js/dom/getTranslateProperties'
describe('js/dom/getTranslateProperties', () => {
	let elm, refs, translateProps;
	before((done) => {
		elm = document.querySelector('#getTranslateProperties');
		refs = getRefs(elm);
		translateProps = __getTranslateProperties(refs.element);
		done();
	});
	it('Should have the translateX property to 100', (done) => {
		if (translateProps.x === 100) done();
		else done(`The translateX property is actually : ${translateProps.x}`);
	});
	it('Should have the translateY property to 50', (done) => {
		if (translateProps.y === 50) done();
		else done(`The translateY property is actually : ${translateProps.y}`);
	});
	it('Should have the translateZ property to 200', (done) => {
		if (translateProps.z === 200) done();
		else done(`The translateZ property is actually : ${translateProps.z}`);
	});
});

// js/dom/imageLoaded
import __imageLoaded from '../dist/js/dom/imageLoaded'
describe('js/dom/imageLoaded', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#imageLoaded');
		refs = getRefs(elm);
		done();
	});
	it('Should detect the complete loading process on the image', (done) => {
		__imageLoaded(refs.image).then(() => {
			done();
		});
	});
});
