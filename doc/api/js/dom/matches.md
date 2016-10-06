


-----------------------------
## API
-----------------------------

### matches(HTMLElement elm, String selector) : Boolean
Polyfill for the Element.matches function

- Privacy : **Public**

- Return : **Boolean** : If the element match the selector or not

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to check | required | 
selector | **String** | The selector to check on the element | required | 


#### Sample
```js
import matches from 'sugarcss/js/dom/matches'
if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
		// the element match the selector
}

```


