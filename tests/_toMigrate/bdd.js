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
// import __imageLoaded from '../dist/js/dom/imageLoaded'
// describe('js/dom/imageLoaded', () => {
// 	let elm, refs;
// 	before((done) => {
// 		elm = document.querySelector('#imageLoaded');
// 		refs = getRefs(elm);
// 		done();
// 	});
// 	it('Should detect the complete loading process on the image through the promise', (done) => {
// 		__imageLoaded(refs.image).then(() => {
// 			done();
// 		});
// 	});
// 	it('Should detect the complete loading process on the image through the callback', (done) => {
// 		__imageLoaded(refs.image, () => {
// 			done();
// 		});
// 	});
// });

// js/dom/insertAfter
import __insertAfter from '../dist/js/dom/insertAfter'
describe('js/dom/insertAfter', () => {
	let elm, refs, insertedElm;
	before((done) => {
		elm = document.querySelector('#insertAfter');
		refs = getRefs(elm);
		// insert the element
		insertedElm = document.createElement('div');
		__insertAfter(insertedElm, refs.firstElement);
		done();
	});
	it('Should have been inserted after the firstElement', (done) => {
		if (insertedElm.previousSibling === refs.firstElement) done();
		else done('The inserted element is not after the firstElement...');
	});
	it('Should have been inserted before the lastElement', (done) => {
		var nextSibling = insertedElm.nextSibling;
		while(nextSibling && nextSibling.nodeType != 1) {
			nextSibling = nextSibling.nextSibling
		}
		if (nextSibling === refs.lastElement) done();
		else done('The inserted element is not before the lastElement...');
	});
});

// js/dom/inViewportPercentage
import __inViewportPercentage from '../dist/js/dom/inViewportPercentage'
describe('js/dom/inViewportPercentage', () => {
	let elm, refs, insertedElm;
	before((done) => {
		elm = document.querySelector('#inViewportPercentage');
		refs = getRefs(elm);
		done();
	});
	it('Should have an inViewportPercentage of 25', (done) => {
		const percentage = __inViewportPercentage(refs.element);
		if (percentage === 25) done();
		else done(`The inViewportPercentage is actually : ${percentage}`);
	});
});

// @TODO js/dom/inViewportStatusChange
// @TODO js/dom/inViewportStatusChangeDetector

// js/dom/isInViewport
import __isInViewport from '../dist/js/dom/isInViewport'
describe('js/dom/isInViewport', () => {
	let elm, refs, insertedElm;
	before((done) => {
		elm = document.querySelector('#isInViewport');
		refs = getRefs(elm);
		done();
	});
	it('inViewportElement should be in viewport', (done) => {
		if (__isInViewport(refs.inViewportElement)) done();
		else done('The inViewportElement is not in the viewport...');
	});
	it('notInViewportElement should not be in viewport', (done) => {
		if ( ! __isInViewport(refs.notInViewportElement)) done();
		else done('The notInViewportElement is in the viewport...');
	});
});

// @TODO js/dom/linkLoaded

// js/dom/isVisible
import __isVisible from '../dist/js/dom/isVisible'
describe('js/dom/isVisible', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#isVisible');
		refs = getRefs(elm);
		done();
	});
	it('The targetVisibilityHidden should be considered as invisible', (done) => {
		const isVisible = __isVisible(refs.targetVisibilityHidden);
		if ( ! isVisible) done();
		else done('The targetVisibilityHidden is visible...');
	});
	it('The targetDisplayNone should be considered as invisible', (done) => {
		const isVisible = __isVisible(refs.targetDisplayNone);
		if ( ! isVisible) done();
		else done('The targetDisplayNone is visible...');
	});
	it('The targetOpacityZero should be considered as invisible', (done) => {
		const isVisible = __isVisible(refs.targetOpacityZero);
		if ( ! isVisible) done();
		else done('The targetOpacityZero is visible...');
	});
	it('The targetVisible should not be considered as invisible', (done) => {
		const isVisible = __isVisible(refs.targetVisible);
		if (isVisible) done();
		else done('The targetVisible is not visible...');
	});
});

// js/dom/matches
import __matches from '../dist/js/dom/matches'
describe('js/dom/matches', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#matches');
		refs = getRefs(elm);
		done();
	});
	it('Should match the class="hello"', (done) => {
		if (__matches(refs.class, '.hello')) done();
		else done('The element does not match the selector .hello');
	});
	it('Should match the attribute hello="world"', (done) => {
		if (__matches(refs.attribute, '[hello="world"]')) done();
		else done('The element does not match the selector [hello="world"]');
	});
	it('Should match the attribute :not([hello="coco"])', (done) => {
		if (__matches(refs.not, ':not([hello="coco"])')) done();
	});
});

// @TODO js/dom/mutationObservable

// js/dom/next
import __next from '../dist/js/dom/next'
describe('js/dom/next', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#next');
		refs = getRefs(elm);
		done();
	});
	it('Should get the thirdElement from the firstElement with the selector [ref="thirdElement"]', (done) => {
		if (__next(refs.firstElement, '[ref="thirdElement"]') === refs.thirdElement) done();
		else done('The thirdElement has not been found next to the firstElement');
	});
});

// js/dom/offset
import __offset from '../dist/js/dom/offset'
describe('js/dom/offset', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#offset');
		refs = getRefs(elm);
		done();
	});
	it('Should have an offset.left of 300', (done) => {
		const offsetLeft = __offset(refs.element).left;
		if (offsetLeft === 300) done();
		else done(`The offset.left is actually : ${offsetLeft}`);
	});
	it('Should have an offset.top of 250', (done) => {
		const offsetTop = __offset(refs.element).top;
		if (offsetTop === 250) done();
		else done(`The offset.left is actually : ${offsetTop}`);
	});
});

// @TODO js/dom/offsetParent

// js/dom/prependChild
import __prependChild from '../dist/js/dom/prependChild'
describe('js/dom/prependChild', () => {
	let elm, refs, insertedElm;
	before((done) => {
		elm = document.querySelector('#prependChild');
		refs = getRefs(elm);
		// insert the element
		insertedElm = document.createElement('div');
		__prependChild(insertedElm, elm);
		done();
	});
	it('Should have been inserted as the first element in the container', (done) => {
		if (elm.firstChild === insertedElm) done();
		else done('The inserted element is not the first element in the container...');
	});
});

// js/dom/previous
import __previous from '../dist/js/dom/previous'
describe('js/dom/previous', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#previous');
		refs = getRefs(elm);
		done();
	});
	it('Should get the firstElement from the thirdElement with the selector [ref="firstElement"]', (done) => {
		if (__previous(refs.thirdElement, '[ref="firstElement"]') === refs.firstElement) done();
		else done('The firstElement has not been found before the thirdElement');
	});
});

// @TODO js/dom/querySelector
// @TODO js/dom/querySelectorAll
// @TODO js/dom/querySelectorLive

// js/dom/realHeight
import __realHeight from '../dist/js/dom/realHeight'
describe('js/dom/realHeight', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#realHeight');
		refs = getRefs(elm);
		done();
	});
	it('The container element should have a real height of 400', (done) => {
		const realHeight = __realHeight(refs.container);
		if (realHeight === 400) done();
		else done(`The container real height is actually ${realHeight}`);
	});
});

// @TODO js/dom/requestAnimationFrame
// @TODO js/dom/scrollTo
// @TODO js/dom/scrollTop
// @TODO js/dom/sendForm
// @TODO js/dom/style

// js/dom/styleObject2String
import __styleObject2String from '../dist/js/dom/styleObject2String'
describe('js/dom/styleObject2String', () => {
	it('Should correctly transform the object "{ position:absolute; }" to string', (done) => {
		const str = __styleObject2String({
			position : 'absolute'
		});
		if (str === 'position:absolute;') done();
		else done(`The actual generated string is : ${str}`);
	});
});

// @TODO js/dom/stylesheetsReady

// js/dom/styleString2Object
import __styleString2Object from '../dist/js/dom/styleString2Object'
describe('js/dom/styleString2Object', () => {
	it('Should correctly transform the string "position:absolute; to object', (done) => {
		const obj = __styleString2Object('position:absolute;');
		if (obj.position === 'absolute') done();
		else done(`The actual generated object is : ${obj.position}`);
	});
});

// @TODO js/dom/template
// @TODO js/dom/textWidth

// js/dom/whenAttribute
import __whenAttribute from '../dist/js/dom/whenAttribute'
describe('js/dom/whenAttribute', () => {
	let elm, refs;
	before((done) => {
		elm = document.querySelector('#whenAttribute');
		refs = getRefs(elm);
		done();
	});
	it('Should detect when the "world" attribute is setted', (done) => {
		__whenAttribute(refs.element, 'world').then(() => {
			if (refs.element.hasAttribute('world')) done();
		});
		refs.element.setAttribute('world', true);
	});
	it('Should detect when the "hello" attribute is setted to "world"', (done) => {
		__whenAttribute(refs.element, 'hello', (value) => {
			return value === 'world';
		}).then(() => {
			if (refs.element.getAttribute('hello') === 'world') done();
			else done(`The hello attribute has been detected but his value is : ${refs.element.getAttribute('hello')}`);
		});
		// set the attribute
		setTimeout(() => {
			refs.element.setAttribute('hello', 'coco');
			setTimeout(() => {
				refs.element.setAttribute('hello', 'world');
			});
		});
	});
});

// @TODO js/dom/whenInViewport
// @TODO js/dom/whenOutOfViewport
// @TODO js/dom/whenTransitionEnd
// @TODO js/dom/whenVisible
