# printf

printf php equavalent


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
source  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The source in which to replace the tokens  |  required  |
values  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) , [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) , ... }**  |  An object/array/list of values to replace  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The resulting string

### Example
```js
	printf('Hello %s', 'world'); // => Hello world
printf('Hello %s, I\'m %s', 'world', 'John Doe'); // Hello world, I'm John Doe
printf('Hello %s, I\'m %s', ['world', 'John Doe']); // Hello world, I'm John Doe
printf('Hello {first}, I\'m {name}', { first : 'world', name : 'John Doe'}); // Hello world, I'm John Doe
```
See : **See more** : [https://monocleglobe.wordpress.com/2010/01/12/everybody-needs-a-little-printf-in-their-javascript/](https://monocleglobe.wordpress.com/2010/01/12/everybody-needs-a-little-printf-in-their-javascript/)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)