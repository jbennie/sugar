# Mixins


## s-filter




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$filters  |  **{ List<String> }**  |  The registered filter(s) name(s) or the filter(s) string(s) to transform into list  |  required  |

### Example
```scss
	// register a filter
@include s-setup((
		filters : (
			myCoolFilter : box-shadow(#000 0 0 10px) blur(30px),
			// other filters...
		)
));

// registered filter
.my-cool-elememt {
		@include s-filter(myCoolFilter);
		// filter : box-shadow(#000 0 0 10px) blur(30px);
}

// custom filter
.my-cool-element {
		@include s-filter(myCoolFilter invert(100%));
		// filter : box-shadow(#000 0 0 10px) blur(30px) invert(100%);
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>