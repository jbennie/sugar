


-----------------------------
## API
-----------------------------

### previous(elm : HTMLElement, selector : String) : HTMLElement
Browse the passed element previous siblings to find the first element that matches the passed selector

- Privacy : **Public**

- Return : **HTMLElement** : The element found or null

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to start on | required | 
selector | **String** | A css selector to search for | required | 


#### Sample
```language-undefined
import previous from 'sugarcss/js/dom/previous'
const previousElm = previous(myCoolElement, '.my-cool-class');
if (previousElm) {
		// we have found en element that matches the selector
}

```


