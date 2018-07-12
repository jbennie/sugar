# SMotionblurSvgFilter

This class represent a motion blur svg filter that will blur your
element depending on his movements, direction and speed


### Example
```js
	const filter = new SMotionblurSvgFilter();
filter.applyTo(myCoolHTMLElement);
// now when your element will move, it will be blured accordingly
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Extends **SSvgFilter**


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
amount  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The motion blur amount  |  required  |





## Properties


### amount

Store the amount of motion blur to apply

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **0.5**


## Methods


### applyTo

Apply the filter to element

**Override**


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element on which to apply the filter  |  required  |


### unapplyFrom

Remove the filter from element

**Override**


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to unapply the filter from  |  required  |


### destroy

Destroy the filter

**Override**