import { should, expect } from 'chai'
should();

import __closest from 'sugarcss/dom/closest'
import __closestNotVisible from 'sugarcss/dom/closestNotVisible'
import __dataset from 'sugarcss/dom/dataset'

describe('dom', () => {

    /**
     * closest
     */
    describe('closest', () => {
        let container = document.querySelector('#closest');
        it('should find the .target element', () => {
			let checker = container.querySelector('.checker-1');
			let closest = __closest(checker, '.target');
			expect(closest).not.to.equal(false);
        });
        it('should find the s-closest-target element', () => {
            let checker = container.querySelector('.checker-1');
			let closest = __closest(checker, '[target]');
			expect(closest).not.to.equal(false);
        });
        it('should not find the .closest-1 element from the closest-check-2', () => {
            let checker = container.querySelector('.checker-2');
            let closest = __closest(checker, '.target');
            expect(closest).to.equal(false);
        });
    });


    /**
     * closestNotVisible
     */
    describe('closestNotVisible', () => {
        let container = document.querySelector('#closestNotVisible');
        it('should find the element that has a display:none on it', () => {
            let checker = container.querySelector('.checker-display');
            expect(__closestNotVisible(checker, '.target')).not.to.equal(false);
        });
        it('should find the element that has an opacity:0 on it', () => {
            let checker = container.querySelector('.checker-opacity');
            expect(__closestNotVisible(checker, '.target')).not.to.equal(false);
        });
        it('should find the element that has a visibility:hidden on it', () => {
            let checker = container.querySelector('.checker-visibility');
            expect(__closestNotVisible(checker, '.target')).not.to.equal(false);
        });
        it('should not find any closest not visible element', () => {
            let checker = container.querySelector('.checker-none');
            expect(__closestNotVisible(checker, '.target')).to.equal(false);
        });
    });


    /**
     * dataset
     */
    describe('dataset', () => {
        let elm = document.querySelector('#dataset');
        it('should have a data-hello="world"', () => {
            expect(__dataset(elm, 'hello')).to.equal('world');
        });
        it('should set the data-hello to "coco"', () => {
            __dataset(elm, 'hello', 'coco');
            expect(__dataset(elm, 'hello')).to.equal('coco');
        })
        it('should return the element itself on setting dataset value', () => {
            expect(__dataset(elm, 'hello', 'coco')).to.equal(elm);
        });
        it('should apply a new camelize dataset value correctly', () => {
            __dataset(elm, 'yopYop', 'hey');
            expect(elm.getAttribute('data-yop-yop')).to.equal('hey');
        });
    });

});

mocha.run();
