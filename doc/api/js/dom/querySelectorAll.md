
-----------------------------
## Settings
-----------------------------

### visible : Boolean = false
If we want only visible elements

### inViewport : Boolean = false
If we want only elements that are in the viewport

### rootNode : HTMLElement = document.body
The root node to start the query from


-----------------------------
## API
-----------------------------

### querySelectorAll(selector : String, settings : Object) : Array<HTMLElement>
Enhanced proxy of the Element.querySelectorAll function that let you specify
if you want elements that are visible, or even that are in the viewport

- Privacy : **Public**

- Return : **Array<HTMLElement>** : The founded elements

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
selector | **String** | The css selector to search | required | 
settings | **Object** |  | required | 


#### Sample
```language-undefined
// simple query
const elms = querySelectorAll('.a-cool-css-selector');

// get elements that are in the viewport
const elms = querySelectorAll('.a-cool-css-selector', {
		inViewport : true
});

```


