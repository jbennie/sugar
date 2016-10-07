


-----------------------------
## API
-----------------------------

### s-filter( {List}<String>) : {List}
Return a list with all the filters that are passed as argument
This will use the [._s-filter-map.scss] function to parse the filters

- Privacy : **Public**

- Return : **{List}** : The converted filters list to use as css property

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
{List}<String> | **** | $filters | required | 


#### Sample
```scss
// register a filter
\@include s-setup((
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


