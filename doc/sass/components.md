# Components

Sugar provide some cool components that you can use.

Here the list of components that are shipped out of the box with Sugar:

- **[Buttons](../src/components/SButtonComponent/_index.md)** : Provide base buttons styles like:
	- Basic (default)
	- Outline
	- Link
- **[Corner badges](../src/components/SCornerBadgeComponent/_index.md)** : Cool corner badges
- **[Dropdowns](../src/components/SDropdownComponent/_index.md)** : Dropdown component that support tl, tr, bl and br alignement
- **[Forms](../src/components/SFormComponent/_index.md)** : Provide base form styles like:
	- Input / Select / Textarea
	- Checkbox / Radio
	- Group
	- Addons
- **[Navigations](../src/components/SNavComponent/_index.md)** : Provide base navigations styles like:
	- Inline
	- Justify
	- Tabs
- **[Tables](../src/components/STableComponent/_index.md)** : Provide base table styles like:
	- Default
	- Stripped
	- Hover
	- Bordered
- **[Typography](../src/components/STypography/_index.md)** : Provide base typography styles like:
	- Titles (h1, h2, ..., h6)
	- Paragraphs (default, lead)
	- Links
	- Lists (ul, ol, dl)
	- Captions
	- Quotes
	- Inline elements (mark, del, ins, etc...)

## Components structure

Each components usually are divided in four parts:

1. The **bare** part that gives you only the structure of the component (sizes, paddings, etc...)
	- Some components does not support this part...
2. The **style** part that gives you a pre-build style if you don't want to make your own
	- Some components does not support this part...
3. The **classes-bare** part that create default classes with only the **bare** part
4. The **classes-style** part that apply to default classes the **style** part

## Usage

Here how to use the components

```scss
// apply the button bare and style to my custom element
.my-cool-element {
	@include s-button();
}
// apply only the bare styling to my custom element
.my-cool-element {
	@include s-button-bare();
}
// apply only the style styling to my custom element
.my-cool-element {
	@include s-button-style();
}

// will print out classes for the button including bare and style part
@include s-button-classes(
	$colors : default primary secondary
);
// will print out classes for the button including only bare part
@include s-button-classes-bare();
// will print out classes for the button including only style part
@include s-button-classes-style(
	$colors : default primary secondary
);
```

> Each components are structured the same way. The mixins format will always be like this:
- **s-{component-name}**
- **s-{component-name}-bare**
- **s-{component-name}-style**
- **s-{component-name}-classes**
- **s-{component-name}-classes-bare**
- **s-{component-name}-classes-style**

Don't forget to check the documentation of each components to see exactly the parameters allowed.
