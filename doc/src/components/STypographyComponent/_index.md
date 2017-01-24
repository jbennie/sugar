## STypographyComponent

Provide ability to generate base typography classes for:
- Titles:
	- ```.h1-h6```
	- ```.tf h1-h6```
- Paragraphs
	- ```.p```, ```.tf p```
	- ```.p--lead```, ```.tf p.p--lead```
- Links
	- ```.link```, ```.tf a```
- Inline text elements
 - ```.mark```, ```.tf mark```
 - ```.del```, ```.tf del```
 - ```.s```, ```.tf s```
 - ```.ins```, ```.tf ins```
 - ```.u```, ```.tf u```
 - ```.small```, ```.tf small```
 - ```.strong```, ```.tf strong```
 - ```.em```, ```.tf em```
- Lists
	- ```.dl```, ```.tf dl```
		- ```.dt```, ```.tf dt```
		- ```.dd```, ```.tf dd```
	- ```.ul```, ```.tf ul```
		- ```.li```, ```.tf li```
	- ```.ol```, ```.tf ol```
		- ```.li```, ```.tf li```
- Captions
	- ```.caption```, ```.tf caption```, ```.tf figcaption```
- Quotes
	- ```.quote```, ```.tf quote```
	- ```.blockquote```, ```.tf blockquote```

See:
- [Element level mixins API](./sass/_main.md)
- [Classes level mixins API](./sass/_classes.md)


#### Example
```scss
	// apply the title bare and style to my custom element
h1 {
	@include s-typography-title(4em);
}
// apply only the bare styling to my custom title
h1 {
	@include s-typography-title-bare(4em);
}
// apply only the style styling to my custom title
h1 {
	@include s-typography-title-style(4em);
}

// provide classes for all the typography elements
@include s-typography-classes();
```
Author : Olivier Bossel <olivier.bossel@gmail.com>