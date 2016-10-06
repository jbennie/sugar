


-----------------------------
## API
-----------------------------

### getAnimationProperties(HTMLElement elm) : Object
Get the css animation properties from an HTMLElement in an object format

- Privacy : **Public**

- Return : **Object** : The animation properties

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to get the properties from | required | 


#### Sample
```js
import getAnimationProperties from 'sugarcss/js/dom/getAnimationProperties'
const props = getAnimationProperties(myCoolHTMLElement);
// output format
// {
// 	name : ['animation1'],
// 	duration : [200],
// 	delay : [0],
// 	timingFunction : ['linear'],
// 	iterationCount : [1],
// 	direction : ['forward'],
// 	totalDuration : 200
// }

```


