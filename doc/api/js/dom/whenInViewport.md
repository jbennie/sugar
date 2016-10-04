


-----------------------------
## API
-----------------------------

### whenInViewport(elm : HTMLElement, cb : Function = null) : (Promise)
Monitor an HTMLElement to be notified when it is in the viewport

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the element is in the viewport

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to monitor | required | 
cb | **Function** | An optional callback to call when the element is in the viewport | optional | null


#### Sample
```language-undefined
import whenInViewport from 'sugarcss/js/dom/whenInViewport'
whenInViewport(myCoolHTMLElement).then((elm) => {
		// do something with your element that has entered the viewport...
});

```


