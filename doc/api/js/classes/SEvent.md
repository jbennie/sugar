# SEvent
Proxy class to create custom events that can be dispatched
through the standard dispatch method on any HTMLElement

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
name | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The event name | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The event settings | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
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

-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } cancelable = true
Set if the event is cancelable or not

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } bubbles = true
Set if the event will bubble or not

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } detail = null
Pass an object that will be sent with the event



