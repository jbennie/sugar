# SSvgFilter

This class allows you to create with ease some complexe SVG filters and to apply it on any HTMLElement that you want
by extending this class like so


### Example
```js
	class MyBlurFilter extends SSvgFilter {

		constructor(amount = 8) {
			super(`
				<feGaussianBlur in="SourceGraphic" stdDeviation="${amount}" result="blur" />
			`);
		}
}

// using your filter
const myFilter = new MyBlurFilter(10);
myFilter.applyTo(myCoolHTMLElement);
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor







## Methods


### applyTo

Apply the filter to an element


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element on which to apply the filter  |  required  |


### unapplyFrom

Unapply from


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element from which to remove the filter  |  required  |


### destroy

Destroy the filter