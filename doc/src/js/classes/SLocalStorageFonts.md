# SLocalStorageFonts

This class allows to easily store and load custom fonts from the localStorage


### Example
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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The settings  |  required  |




## Settings

Here's the list of available setting(s).

### version

Store the version of the fonts to load.
Used for cache busting

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **1.0**


### json_path

Set the json file to load

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **/fonts/fonts.json**


### debug

Set if want the debug messages in the console

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**