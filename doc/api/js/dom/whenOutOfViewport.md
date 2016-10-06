


-----------------------------
## API
-----------------------------

### whenOutOfViewport(HTMLElement elm, Function cb = null) : (Promise)
Monitor an HTMLElement to be notified when it exit the viewport

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the element exit the viewport

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to monitor | required | 
cb | **Function** | An optional callback to call when the element exit the viewport | optional | null


#### Sample
```js
import whenOutOfViewport from 'sugarcss/js/dom/whenOutOfViewport'
whenOutOfViewport(myCoolHTMLElement).then((elm) => {
		// do something with your element that has exit the viewport...
});

```


