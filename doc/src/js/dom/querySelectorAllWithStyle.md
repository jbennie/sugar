# querySelectorAllWithStyle

Select all node that match the style object passed as parameter


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css selector to use as base filter  |  required  |
style  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The style that has to match  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  A setting object  |  optional  |  {}

Return **{ [Array<HTMLElement>] }** An array of HTMLElement that matches the style object

### Example
```js
	import querySelectorAllWithStyle from 'coffeekraken-sugar/js/dom/querySelectorAllWithStyle'
querySelectorAllWithStyle('*', {
	backgroundImage: true
})

// style object can contains either:
const style = {
	 backgroundImage: true, // has to have the background-image style
  backgroundPosition: false, // has to not have the background-position style
  backgroundSize: /cover|contain/, // has to have the background-size set to cover or contain
  background: 'none' // has to have to background set to "none"
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)





## Settings

Here's the list of available setting(s).

### settings.rootNode

The root node used to select the the elements within

Type : **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **document**