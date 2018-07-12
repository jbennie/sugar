# SEvent

Proxy class to create custom events that can be dispatched
through the standard dispatch method on any HTMLElement


### Example
```js
	let myEvent = new SEvent('myCoolEvent', {
		cancelable : true,
		bubbles : false,
		detail : {
			// some datas to send with the event
		}
});
// dispatch the event from an HTMLElement
myHTMLElement.dispatch(myEvent);
```
See : **See more** : [https://www.npmjs.com/package/customevent](https://www.npmjs.com/package/customevent)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The event name  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The event settings  |  required  |




## Settings

Here's the list of available setting(s).

### cancelable

Set if the event is cancelable or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**


### bubbles

Set if the event will bubble or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**


### detail

Pass an object that will be sent with the event

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **null**