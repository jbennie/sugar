import __splitLetters from 'coffeekraken-sugar/js/dom/splitLetters'
import __whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
import __querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'

/**
 * Init the listener for the "letters-in-reveal" animation to work
 *
 * @example
 * @import 	animLettersInReveal from 'coffeekraken-sugar/components/SAnimationComponent/js/letters-in-reveal'
 * animLettersInReveal(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function animLettersInReveal() {
	__querySelectorLive('[anim="letters-in-reveal"]', (elm) => {
		__splitLetters(elm);
		__whenInViewport(elm).then((elm) => {
			setTimeout(() => {
				elm.classList.add('anim-play');
			}, 150);
		});
	});
}
