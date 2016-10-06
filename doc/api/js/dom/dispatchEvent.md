


-----------------------------
## API
-----------------------------

### dispatchEvent(HTMLElement target, String name, Mixed data)

- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
target | **HTMLElement** | The element to dispatch the event from | required | 
name | **String** | The event name to dispatch | required | 
data | **Mixed** | The data to attache to the event | required | 


#### Sample
```js
import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
		var1 : 'value1'
});

```


