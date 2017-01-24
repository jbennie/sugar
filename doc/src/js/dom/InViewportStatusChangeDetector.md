## Constructor


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to track  |  required  |






## Methods


### InViewportStatusChangeDetector

This class allows you to monitor an HTMLElement and be notified when it enters or exit the viewport.


#### Example
```js
	const detector = new InViewportStatusChangeDetector(myCoolHTMLElement);
detector.on('enter', (elm) => {
		// the element has entered the viewport
});
detector.on('exit', (elm) => {
		// the element has exit the viewport
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### on

Add a callback


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The status to track (enter|exit)  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to add  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability


### off

Remove a callback


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The status to remove (enter|exit)  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to remove  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability

Default : **null) {**


### destroy

Destroy the tracker