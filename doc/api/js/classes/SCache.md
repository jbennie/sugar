
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The name of the cache  |  required  |



## Properties


### name

Store the cache name

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### cache

Store the cache object

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**

## Methods


### get

Get a value from the cache


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The id of the cache element to retreive  |  required  |

Return **{ Mixed }** The cache value or null if not exist

### get

Get the now timestamp

Return **{ Integer }** The timestamp of now

### id,

Set a value in the cache


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
id  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The id of the cache element to set  |  required  |
value  |  **{ Mixed }**  |  The value to set in cache  |  required  |
lifetime  |  **{ Integer }**  |  The lifetime of this value in cache  |  required  |
