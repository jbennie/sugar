# SLocalStorageCache

Extends **SCache**

Create a simple localStorage cache

### Example
```js
	import SLocalStorageCache from 'coffeekraken-sugar/js/classes/SLocalStorageCache'
const myCache = new SLocalStorageCache('my-cache', {
	lifetime: 3600
});
// set an item into the cache
myCache.set('my-cool-item', 'something');
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


## Constructor

Create a new local storage cache



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The cache name  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The cache settings passed to the SCache class  |  optional  |  {}