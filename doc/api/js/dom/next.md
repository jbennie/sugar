


-----------------------------
## API
-----------------------------

### next(elm : HTMLElement, selector : String) : HTMLElement
Browse the passed element next siblings to find the first element that matches the passed selector

- Privacy : **Public**

- Return : **HTMLElement** : The element found or null

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to start on | required | 
selector | **String** | A css selector to search for | required | 


#### Sample
```language-undefined
import next from 'sugarcss/js/dom/next'
const nextElm = next(myCoolElement, '.my-cool-class');
if (nextElm) {
		// we have found en element that matches the selector
}

```


