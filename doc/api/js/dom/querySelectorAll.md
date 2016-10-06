
-----------------------------
## Settings
-----------------------------

### Boolean visible = false
If we want only visible elements

### Boolean inViewport = false
If we want only elements that are in the viewport

### HTMLElement rootNode = document.body
The root node to start the query from


-----------------------------
## API
-----------------------------

### querySelectorAll(String selector, Object settings) : Array<HTMLElement>
Enhanced proxy of the Element.querySelectorAll function that let you specify
if you want elements that are visible, or even that are in the viewport

- Privacy : **Public**

- Return : **Array<HTMLElement>** : The founded elements

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **String** | The css selector to search | required | 
settings | **Object** |  | required | 


#### Sample
```js
// simple query
const elms = querySelectorAll('.a-cool-css-selector');

// get elements that are in the viewport
const elms = querySelectorAll('.a-cool-css-selector', {
		inViewport : true
});

```


