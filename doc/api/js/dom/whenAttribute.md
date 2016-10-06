


-----------------------------
## API
-----------------------------

### whenAttribute(HTMLElement elm, String attribute, Function checkFn = null) : (Promise)
Resolve a promise when the wanted attribute on the passed HTMLElement exist or pass the check function provided

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the attribute exist on the element (and that it passes the checkFn)

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The HTMLElement on which to monitor the property | required | 
attribute | **String** | The attribute to monitor | required | 
checkFn | **Function** | An optional function to check the attribute. The promise is resolved when this function return true | optional | null


#### Sample
```js
import whenAttribute from 'sugarcss/js/dom/whenAttribute'
whenAttribute(myCoolHTMLElement, 'value').then((value) => {
		// the value attribute exist on the element
});
// with a checkFn
whenAttribute(myCoolHTMLElement, 'value', (newVal, oldVal) => {
		// make sure the value is a number
		return typeof(newVal) === 'number';
}).then((value) => {
		// do something with your number value...
});

```


