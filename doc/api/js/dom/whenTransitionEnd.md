


-----------------------------
## API
-----------------------------

### whenTransitionEnd(HTMLElement elm, Function cb = null) : (Promise)
Monitor an HTMLElement to be notified when his transition has ended

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the element transition has ended

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to monitor | required | 
cb | **Function** | An optional callback to call when the element transition has ended | optional | null


#### Sample
```js
import whenTransitionEnd from 'sugarcss/js/dom/whenTransitionEnd'
whenTransitionEnd(myCoolHTMLElement).then((elm) => {
		// do something with your element transition has ended...
});

```


