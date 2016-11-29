
# SLocalStorageFonts
This class allows to easily store and load custom fonts from the localStorage

#### Example
```js
	new SLocalStorageFonts({
 	json_path : '/fonts/fonts.json#v1'
});

// the fonts.json file looks like this
{
		"fonts" : [{
  		"font-family" : "Open Sans",
    	"font-weight" : 300,
     	"src" : "url(data:application/font-woff;base64,d09GRgA..."
     }]
}

```
Author : Olivier Bossel<olivier.bossel@gmail.com>
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
settings  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The settings  |  required  |


## Settings

Here's the list of available settings that you can pass to the constructor

### version

Store the version of the fonts to load.
Used for cache busting

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **1.0**

### json_path

Set the json file to load

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **/fonts/fonts.json**

### debug

Set if want the debug messages in the console

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**
Default : **false**

## Properties




