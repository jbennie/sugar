
# InViewportStatusChangeDetector
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
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to track  |  required  |




## Methods


### on

Add a callback


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The status to track (enter|exit)  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The callback to add  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability

### off

Remove a callback


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
status  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The status to remove (enter|exit)  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The callback to remove  |  required  |

Return **{ InViewportStatusChangeDetector }** The instance itself to maintain chainability

### destroy

Destroy the tracker
