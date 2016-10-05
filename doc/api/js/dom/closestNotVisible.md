


-----------------------------
## API
-----------------------------

### closestNotVisible(elm : HTMLElement) : HTMLElement
Go up the dom three to find the first element that is not visible.
Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none

- Privacy : **Public**

- Return : **HTMLElement** : The element found or null

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to start on | required | 


#### Sample
```language-undefined
import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
const closestElm = closest(myCoolElement);
if (closestElm) {
		// we have found en element is not visible
}

```


