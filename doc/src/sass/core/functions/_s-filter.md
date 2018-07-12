# s-filter

Return a list with all the filters that are passed as argument
This will use the [./_s-filter-map.scss] function to parse the filters



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$filters  |  **{ List<String> }**  |  The registered filter(s) name(s) or the filter(s) string(s) to transform into list  |  required  |

Return **{ [List](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) }** The converted filters list to use as css property

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
		filter : s-filter(myCoolFilter);
		// filter : box-shadow(#000 0 0 10px) blur(30px);
}

// custom filter
.my-cool-element {
		filter : s-filter(myCoolFilter invert(100%));
		// filter : box-shadow(#000 0 0 10px) blur(30px) invert(100%);
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)