import __whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
import __querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'

/**
 * Init the listener for the "slide-in-" animation to work
 * Supported slides animation directions
 * - up
 * - right
 * - left
 * - down
 *
 * @example
 * @import 	animSlideIn from 'coffeekraken-sugar/components/SAnimationComponent/js/slide-in'
 * animSlideIn(); // init listeners
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function animSlideIn() {
	__querySelectorLive('[anim^="slide-in-"]', (elm) => {
		__whenInViewport(elm).then((elm) => {
			setTimeout(() => {
				elm.classList.add('anim-play');
			}, 150);
		});
	});
}
