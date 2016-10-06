
-----------------------------
## Settings
-----------------------------

### Boolean visible = false
If we want only a visible element

### Boolean inViewport = false
If we want only an element that is in the viewport

### HTMLElement rootNode = document.body
The root node to start the query from


-----------------------------
## API
-----------------------------

### querySelector(String selector, Object settings) : HTMLElement
Enhanced proxy of the Element.querySelector function that let you specify
if you want an element that is visible, or even that is in the viewport

- Privacy : **Public**

- Return : **HTMLElement** : The founded element

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **String** | The css selector to search | required | 
settings | **Object** |  | required | 


#### Sample
```js
// simple query
const elm = querySelector('.a-cool-css-selector');

// get an element that is in the viewport
const elm = querySelector('.a-cool-css-selector', {
		inViewport : true
});

```


