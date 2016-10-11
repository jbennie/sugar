


-----------------------------
## API
-----------------------------

### s-dash-to-map({List} $dash) : {Map}
Transform a dash notation value into a map
Dash notation value is : -key1 value1 -key2 value2

- Privacy : **Public**

- Return : **{Map}** : The map generated

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$dash | **{List}** | The dash list notation to transform | required | 


#### Sample
```scss
$dash : -hello world -coco universe
s-dash-to-map($dash);
// (
// 	hello : world,
// 	coco : universe
// )

```


