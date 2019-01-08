# SCache

Base class for cache like SLocalStorageCache and others that you can create


### Example
```js
	class SLocalStorageCache extends SCache {
  // in the constructor, you need to get the cache from
  // the localstorage (or whatever), and set the `this.cache` property
  constructor(name, settings = {}) {
    super(name, settings)
    const ls = localStorage.getItem(this.name)
    if (!ls) return
    this.cache = JSON.parse(ls)
  }
  // in the `_save` method, you'll need to save the cache in localstorage (or whatever)
  _save() {
    localStorage.setItem(this.name, JSON.stringify(this.cache))
  }
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The name of the cache  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The cache settings  |  optional  |  {}




## Settings

Here's the list of available setting(s).

### lifetime

The lifetime in second of the cache items by default. Can be set individually by cache item

Type : **{ Integer }**

Default : **3600 * 24**


## Properties


### name

Store the cache name

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**


### cache

Store the cache object

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**


## Methods


### get

Get a value from the cache


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The id of the cache element to retreive  |  required  |

Return **{ Mixed }** The cache value or null if not exist


### now

Get the now timestamp

Return **{ Integer }** The timestamp of now


### set

Set a value in the cache


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The id of the cache element to set  |  required  |
value  |  **{ Mixed }**  |  The value to set in cache  |  required  |
lifetime  |  **{ Integer }**  |  The lifetime of this value in cache in second  |  required  |