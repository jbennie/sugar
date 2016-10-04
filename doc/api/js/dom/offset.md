


-----------------------------
## API
-----------------------------

### offset(elm : HTMLElement) : Object
Get the offset top and left of the passed element from the document top left point

- Privacy : **Public**

- Return : **Object** : The offset top and left object

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to get the offset from | required | 


#### Sample
```language-undefined
import offset from 'sugarcss/js/dom/offset'
const offsetElm = offset(myCoolElement);
// output : { top : 200, left : 300 }

```


