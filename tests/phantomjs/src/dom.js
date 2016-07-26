import { should, expect } from 'chai'
should();

import __closest from 'sugarcss/dom/closest'
import __closestNotVisible from 'sugarcss/dom/closestNotVisible'
import __dataset from 'sugarcss/dom/dataset'
import __querySelectorLive from 'sugarcss/dom/querySelectorLive'

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


    /**
     * querySelectorLive
     */
    describe('querySelectorLive', () => {
        let elm = document.querySelector('#querySelectorLive');
        it('should find the checker-1 that is already into the DOM', (done) => {
            __querySelectorLive('.checker-1', {
                rootNode : elm
            }).subscribe((elm) => {
                if (elm.classList.contains('checker-1')) {
                    done();
                }
            });
        });
        it('should find the checker-3 that has been removed and added again into the dom', (done) => {
            let checker3 = elm.querySelector('.checker-3');
            let detectCount = 0;
            __querySelectorLive('.checker-3', {
                rootNode : elm
            }).subscribe((elm) => {
                if (elm.classList.contains('checker-3') && detectCount === 1) {
                    done();
                }
                detectCount++;
            });
            checker3.parentNode.removeChild(checker3);
            elm.appendChild(checker3);
        });
        it('should find the checker-2 that is in a dom element added programatically', (done) => {
            __querySelectorLive('.checker-2', {
                rootNode : elm
            }).subscribe((elm) => {
                if (elm.classList.contains('checker-2')) {
                    done();
                }
            });
            let container = document.createElement('div');
            let checker2 = document.createElement('div');
            checker2.classList.add('checker-2');
            container.appendChild(checker2);
            elm.appendChild(container);
        });
        it('should not find the checker-once after removing and adding it again that use the once operator', (done) => {
            let checker4 = elm.querySelector('.checker-once');
            let detectCount = 0;
            __querySelectorLive('.checker-once', {
                rootNode : elm
            }).once().subscribe((elm) => {
                if (elm.classList.contains('checker-once') && detectCount === 1) {
                    done('the checker-once has been detected after removing even if it use the once operator...');
                }
                detectCount++;
            });
            checker4.parentNode.removeChild(checker4);
            elm.appendChild(checker4);
            setTimeout(() => {
                done();
            });
        });
    })

});

mocha.run();
