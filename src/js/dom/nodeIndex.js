/**
 * Return the inde of the passed node inside the html
 * @param    {HTMLElement}    node    The node to get the index for
 * @return    {Integer}    The index of the node inside the html
 *
 * @example    js
 * import nodeIndex from 'coffeekraken-sugar/js/dom/nodeIndex'
 * // assuming:
 * // <li>item #1</li>
 * // <li class="match">item #2</li>
 * // <li>item #3</li>
 * nodeIndex(document.querySelector('.match')) // 1
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function nodeIndex(node) {
	let index = 0;
	while ((node = node.previousElementSibling)) {
		index++;
	}
	return index;
}
