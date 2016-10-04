


-----------------------------
## API
-----------------------------

### closest(elm : HTMLElement, selector : String) : HTMLElement
Go up the dom three to find the first element that matches the passed selector

- Privacy : **Public**

- Return : **HTMLElement** : The element found or null

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to start on | required | 
selector | **String** | A css selector to search for | required | 


#### Sample
```language-undefined
import closest from 'sugarcss/js/dom/closest'
const closestElm = closest(myCoolElement, '.my-cool-class');
if (closestElm) {
		// we have found en element that matches the selector
}

```


