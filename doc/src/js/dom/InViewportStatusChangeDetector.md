# InViewportStatusChangeDetector

This class allows you to monitor an HTMLElement and be notified when it enters or exit the viewport.


### Example
```js
	const detector = new InViewportStatusChangeDetector(myCoolHTMLElement);
detector.on('enter', (elm) => {
		// the element has entered the viewport
});
detector.on('exit', (elm) => {
		// the element has exit the viewport
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to track  |  required  |






## Methods


### on

Add a callback


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The status to track (enter|exit)  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to add  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability


### off

Remove a callback


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The status to remove (enter|exit)  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to remove  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability


### destroy

Destroy the tracker