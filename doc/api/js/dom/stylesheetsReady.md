


-----------------------------
## API
-----------------------------

### stylesheetsReady(Array<HTMLLinkElement> links, Function cb = null) : Promise
Wait until all the HTMLLinkElement's are properly loaded

- Privacy : **Public**

- Return : **Promise** : The promise that will be resolved when all the links are loaded

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
links | **Array<HTMLLinkElement>** | The HTMLLinkElement tags to process | required | 
cb | **Function** | An optional callback function to call when all the links are loaded | optional | null


#### Sample
```js
import stylesheetsReady from 'sugarcss/js/dom/stylesheetsReady'
stylesheetsReady([
		myHTMLLinkElement1,
		myHTMLLinkElement2
]).then(() => {
		// do something when all the links are loaded
});

```


