


-----------------------------
## API
-----------------------------

### getTranslateProperties(elm : HTMLElement) : Object
Get a translate properties of an HTMLElement

- Privacy : **Public**

- Return : **Object** : The translate x,y and z properties

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to get the properties from | required | 


#### Sample
```language-undefined
import getTranslateProperties from 'sugarcss/js/dom/getTranslateProperties'
const props = getTranslateProperties(myCoolHTMLElement);
// output format
// {
// 	x : 100,
// 	y : 0,
// 	z : 0
// }

```


