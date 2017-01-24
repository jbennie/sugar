# SGradientSvgFilter

Extends **SSvgFilter**

This SVG filter class apply either a linear or a radial gradient of your choice
on an HTMLElement.
This is useful cause the gradient will only be applied on part of the elements that is really visible and will respect the opacity
of each parts


### Example
```js
	const filter = new SGradientSvgFilter();
filter.linear(['red','blue','green']);
filter.applyTo(myCoolHTMLElement);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


## Constructor







## Methods


### linear

Linear gradient


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
colors  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  An array of colors for your gradient  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings of your gradient  |  required  |

Default : **{}) {**


### radial

Linear gradient


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
colors  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  An array of colors for your gradient  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings of your gradient  |  required  |

Default : **{}) {**


### applyTo

Apply the filter to element


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element on which to apply the filter  |  required  |


### unapplyFrom

Remove the filter from element


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to unapply the filter from  |  required  |