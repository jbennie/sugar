# throttle

This utils function allows you to make sure that a function that will normally be called
several times, for example during a scroll event, to be called once each threshhold time


### Example
```js
	const myThrottledFn = throttle(() => {
		// my function content that will be
		// executed only once each second
}, 1000);

document.addEventListener('scroll', (e) => {
		// call my throttled function
		myThrottledFn();
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)