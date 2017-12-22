import __splitLines from 'coffeekraken-sugar/js/dom/splitLines'
import __whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
import __querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'

/**
 * Init the listener for the "lines-in-boxes" animation to work
 *
 * @example
 * @import 	animLinesInBoxes from 'coffeekraken-sugar/components/SAnimationComponent/js/lines-in-boxes'
 * animLinesInBoxes(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function animLinesInBoxes() {
	__querySelectorLive('[anim="lines-in-boxes]', (elm) => {
		__splitLines(elm);
		__whenInViewport(elm).then((elm) => {
			setTimeout(() => {
				elm.classList.add('anim-play');
			}, 150);
		});
	});
}
