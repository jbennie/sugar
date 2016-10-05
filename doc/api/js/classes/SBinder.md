# SBinder
This class allows to bind properties between objects, object to HTMLElement attribute and vice versa.


- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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

### bindObjectPath2ObjectPath(object1 : Object, path1 : String, object2 : Object, path2 : String) : SBinder
Bind object path 2 object path
- Privacy : **Public**

- Return : **SBinder** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object1 | **Object** | The source object that will be watched | required | 
path1 | **String** | The property path on the source object to watch | required | 
object2 | **Object** | The destination object that will be updated | required | 
path2 | **String** | The property path on the destination object to update | required | 


### bindElementAttribute2ObjectPath(elm : HTMLElement, attribute : String, object : Object, path : String) : SBinder
Bind element attribute to object path
- Privacy : **Public**

- Return : **SBinder** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The source html element that will be watched | required | 
attribute | **String** | The attribute name to watch on the element | required | 
object | **Object** | The destination object that will be updated | required | 
path | **String** | The property path on the destination object to update | required | 


### bindObjectPath2ElementAttribute(object : Object, path : String, elm : HTMLElement, attribute : String) : SBinder
Bind object path to element attribute
- Privacy : **Public**

- Return : **SBinder** : The binder instance to allow chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object | **Object** | The source object that will be watched | required | 
path | **String** | The property path on the source object to watch | required | 
elm | **HTMLElement** | The HTMLElement that will be updated | required | 
attribute | **String** | The attribute to update on the element | required | 


### destroy()
Destroy the binder
- Privacy : **Public**





