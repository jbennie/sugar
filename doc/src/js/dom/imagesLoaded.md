# imagesLoaded

Detect when some images are loaded


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$imgs  |  **{ Array<HTMLImageElement> }**  |  An array (or nodeList) of HTMLImageElement to detect the load  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise resolved when all images are loaded properly

### Example
```js
	import imagesLoaded from 'coffeekraken-sugar/js/dom/imagesLoaded'
imagesLoaded([
	$img1, $img2, $img3
]).then(() => {
  // do something here
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)