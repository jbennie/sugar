


-----------------------------
## API
-----------------------------

### closest(elm : HTMLElement) : Object
Proxy to the HTMLElement.getBoundingClientRect function.
This proxy make some optimisations like it store in cache the
result in the element while no invalidate actions has been made
like scrolling or resizing the window...

- Privacy : **Public**

- Return : **Object** : The bouding client rect object

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to start on | required | 


#### Sample
```language-undefined
import getBoundingClientRect from 'sugarcss/js/dom/getBoundingClientRect'
const rect = getBoundingClientRect(myCoolHTMLElement);

```


