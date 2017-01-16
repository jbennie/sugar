## Constructor


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The name of the cache  |  required  |




## Properties


### name

Store the cache name

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### cache

Store the cache object

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


## Methods


### id

Get a value from the cache


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The id of the cache element to retreive  |  required  |

Return **{ Mixed }** The cache value or null if not exist


### now

Get the now timestamp

Return **{ Integer }** The timestamp of now


### id,

Set a value in the cache


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The id of the cache element to set  |  required  |
value  |  **{ Mixed }**  |  The value to set in cache  |  required  |
lifetime  |  **{ Integer }**  |  The lifetime of this value in cache  |  required  |