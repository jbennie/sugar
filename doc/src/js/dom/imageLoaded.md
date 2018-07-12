# imageLoaded

Wait until the passed image is fully loaded



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
img  |  **{ HTMLImageElement }**  |  The image to check the loading state  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback to call  |  optional  |  null

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise that will be resolved

### Example
```js
	import imageLoaded from 'sugarcss/js/dom/imageLoaded'
imageLoaded(myCoolHTMLImageElement).then((img) => {
		// do something when the image is loaded
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)