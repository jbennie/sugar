# SBinder
This class allows to bind properties between objects, object to HTMLElement attribute and vice versa.


- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```js
const binder = new SBinder();

// keep in sync the myObject2.title with the myObject1.title property
binder.bindObjectPath2ObjectPath(myObject1, 'title', myObject2, 'title');

// update and HTMLElement attribute when the myObject1.title is updated
binder.bindObjectPath2ElementAttribute(myObject1, 'title', myHTMLElement, 'title');

// and more...

```



-----------------------------
## API
-----------------------------

### bindObjectPath2ObjectPath({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } object1, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path1, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } object2, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path2) : { [SBinder](/api/js/classes/SBinder.md) }
Bind object path 2 object path
- Privacy : **Public**

- Return : **{ [SBinder](/api/js/classes/SBinder.md) }** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object1 | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The source object that will be watched | required | 
path1 | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The property path on the source object to watch | required | 
object2 | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The destination object that will be updated | required | 
path2 | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The property path on the destination object to update | required | 


### bindElementAttribute2ObjectPath({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } attribute, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } object, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path) : { [SBinder](/api/js/classes/SBinder.md) }
Bind element attribute to object path
- Privacy : **Public**

- Return : **{ [SBinder](/api/js/classes/SBinder.md) }** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The source html element that will be watched | required | 
attribute | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The attribute name to watch on the element | required | 
object | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The destination object that will be updated | required | 
path | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The property path on the destination object to update | required | 


### bindObjectPath2ElementAttribute({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } object, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } attribute) : { [SBinder](/api/js/classes/SBinder.md) }
Bind object path to element attribute
- Privacy : **Public**

- Return : **{ [SBinder](/api/js/classes/SBinder.md) }** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The source object that will be watched | required | 
path | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The property path on the source object to watch | required | 
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The HTMLElement that will be updated | required | 
attribute | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The attribute to update on the element | required | 


### destroy()
Destroy the binder
- Privacy : **Public**





