


-----------------------------
## API
-----------------------------

### getTransitionProperties(elm : HTMLElement) : Object
Get the css transition properties from an HTMLElement in an object format

- Privacy : **Public**

- Return : **Object** : The animation properties

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to get the properties from | required | 


#### Sample
```language-undefined
import getTransitionProperties from 'sugarcss/js/dom/getTransitionProperties'
const props = getTransitionProperties(myCoolHTMLElement);
// output format
// {
// 	property : ['all'],
// 	duration : [200],
// 	delay : [0],
// 	timingFunction : ['linear'],
// 	totalDuration : 200
// }

```


