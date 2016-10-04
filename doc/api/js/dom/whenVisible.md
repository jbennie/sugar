


-----------------------------
## API
-----------------------------

### whenVisible(elm : HTMLElement, cb : Function = null) : (Promise)
Monitor an HTMLElement to be notified when it is visible

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the element is visible

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to monitor | required | 
cb | **Function** | An optional callback to call when the element is visible | optional | null


#### Sample
```language-undefined
import whenVisible from 'sugarcss/js/dom/whenVisible'
whenVisible(myCoolHTMLElement).then((elm) => {
		// do something with your element that is now visible
});

```


