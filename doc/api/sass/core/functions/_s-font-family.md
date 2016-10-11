


-----------------------------
## API
-----------------------------

### s-font-family({String} $name) : {String}
Return the font-family string or a registered font

- Privacy : **Public**

- Return : **{String}** : The corresponding font-family property to set in your css

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$name | **{String}** | The name of the registered font | required | 


#### Sample
```scss
// register a font
\@include s-setup((
		fonts : (
			myCoolFont : (
				font-family : 'Helvetica Neue',
				font-weight : 'bold',
				// etc...
			),
			// other fonts...
		)
));

// apply the font
.my-cool-element {
		font-family : s-font-family(myCoolFont);
		// font-family : 'Helvetica Neue';
}

```


