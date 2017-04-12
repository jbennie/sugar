# onSwipe

Detect swipes gestures on touch devices.


### Example
```js
	import onSwipe from 'coffeekraken-sugar/js/dom/onSwipe'
onSwipe(myCoolElm, (swipe) => {
	// check the swipe direction
	if (swipe.left) {
		// do something...
	}
	// support : left, right, up, down
	// etc...
}, {
	threshold : 50
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>

Based on : [https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d](https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d)