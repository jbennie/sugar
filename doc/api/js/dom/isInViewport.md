


-----------------------------
## API
-----------------------------

### isInViewport(HTMLElement elm, Object offset) : Boolean
Check if the passed HTMLElement is in the viewport or not

- Privacy : **Public**

- Return : **Boolean** : If the element is in the viewport or not

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to insert | required | 
offset | **Object** | An object of top, right, bottom and left offset used to detect the status | required | 


#### Sample
```js
import isInViewport from 'sugarcss/js/dom/isInViewport'
if (isInViewport(myCoolHTMLElement) {
		// i'm in the viewport
}

```


