# SEvent
Proxy class to create custom events that can be dispatched
through the standard dispatch method on any HTMLElement

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
name | **String** | The event name | required | 
settings | **Object** | The event settings | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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

### cancelable : Boolean = true
Set if the event is cancelable or not

### bubbles : Boolean = true
Set if the event will bubble or not

### detail : Object = null
Pass an object that will be sent with the event



