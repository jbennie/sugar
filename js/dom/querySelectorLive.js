'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = querySelectorLive;

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Observe the dom to get all the elements that matches a passed css selector at any point in time.
 * Be warned that this use the mutation observer API and will monitor all the document for new nodes. Make sure to use it
 * when you don't have the chance to use the custom elements API instead
 *
 * @param	{String} 		selector 		The css selector that we are interested in
 * @param 	{Function} 		cb 				The function to call with the newly added node
 * @param 	{Object} 		[settings={}] 	An optional settings object to specify things like the rootNode to monitor, etc...
 *
 * @example 	js
 * import querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'
 * querySelectorLive('.my-cool-item', (node) => {
 * 	// do something here with the detected node
 * });
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */
function querySelectorLive(selector, cb) {
	var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var id = selector + ' - ' + (0, _uniqid2.default)();

	// extend settings
	settings = Object.assign({}, {
		rootNode: document,
		once: true
	}, settings);

	function pushNewNode(node) {
		if (settings.once) {
			if (!node._querySelectorLive) {
				node._querySelectorLive = {};
			}
			if (node._querySelectorLive[id]) return;
			node._querySelectorLive[id] = true;
		}
		cb && cb(node);
	}

	// listen for updates in document
	var mutationObserver = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.addedNodes) {
				[].forEach.call(mutation.addedNodes, function (node) {
					if ((0, _matches2.default)(node, selector)) {
						pushNewNode(node);
					}
					// search for new nodes inside the added one
					if (!node.querySelectorAll) return;
					var nestedNodes = node.querySelectorAll(selector);
					[].forEach.call(nestedNodes, function (nestedNode) {
						pushNewNode(nestedNode);
					});
				});
			}
		});
	});
	mutationObserver.observe(settings.rootNode, {
		childList: true,
		subtree: true
	});

	// first search
	[].forEach.call(settings.rootNode.querySelectorAll(selector), function (node) {
		pushNewNode(node);
	});
}

/**
 * @name 	settings.rootNode
 * The root node used to detect newly added nodes within
 * @prop
 * @type 		{HTMLElement}
 * @default 	document
 */

/**
* @name 	settings.once
* Specify if want to detect the node only once. Mean that if the node is removed from the dom and added again, it will not be detected again.
* @prop
* @type 		{Boolean}
* @default 	true
*/