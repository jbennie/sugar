# SBinder

This class allows to bind properties between objects, object to HTMLElement attribute and vice versa.


### Example
```js
	const binder = new SBinder();

// keep in sync the myObject2.title with the myObject1.title property
binder.bindObjectPath2ObjectPath(myObject1, 'title', myObject2, 'title');

// update and HTMLElement attribute when the myObject1.title is updated
binder.bindObjectPath2ElementAttribute(myObject1, 'title', myHTMLElement, 'title');

// and more...
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Constructor







## Methods


### bindObjectPath2ObjectPath

Bind object path 2 object path


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
object1  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The source object that will be watched  |  required  |
path1  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property path on the source object to watch  |  required  |
object2  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The destination object that will be updated  |  required  |
path2  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property path on the destination object to update  |  required  |

Return **{ SBinder }** The binder instance to allow chainability


### bindElementAttribute2ObjectPath

Bind element attribute to object path


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The source html element that will be watched  |  required  |
attribute  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The attribute name to watch on the element  |  required  |
object  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The destination object that will be updated  |  required  |
path  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property path on the destination object to update  |  required  |

Return **{ SBinder }** The binder instance to allow chainability


### bindObjectPath2ElementAttribute

Bind object path to element attribute


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
object  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The source object that will be watched  |  required  |
path  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property path on the source object to watch  |  required  |
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement that will be updated  |  required  |
attribute  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The attribute to update on the element  |  required  |

Return **{ SBinder }** The binder instance to allow chainability


### destroy

Destroy the binder