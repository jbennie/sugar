


-----------------------------
## API
-----------------------------

### getTransitionProperties({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }
Get the css transition properties from an HTMLElement in an object format

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** : The animation properties

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to get the properties from | required | 


#### Sample
```js
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


