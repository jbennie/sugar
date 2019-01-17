import getAnimationProperties from './getAnimationProperties'
import getTransitionProperties from './getTransitionProperties'

/**
 * Get the animation or the transition duration
 * @param    {HTMLElement}    $elm    The element to get the animation/transition duration from
 * @return    {Integer}    The animation/transition duration in ms
 *
 * @example    js
 * import getTransmationDuration from 'coffeekraken-sugar/js/dom/getTransmationDuration'
 * getTransmationDuration($myElm) // 200
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function getTransmationDuration($elm) {
	const animationProperties = getAnimationProperties($elm)
	const transitionProperties = getTransitionProperties($elm)
	return animationProperties.totalDuration || transitionProperties.totalDuration
}
