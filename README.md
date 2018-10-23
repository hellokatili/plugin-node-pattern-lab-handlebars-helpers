# Handlerbar.js helpers for Pattern Lab

Registers additional Handlebars helper in Pattern Lab Node version.

## compare helper

The `compare` helper takes 3 arguments: value1 operator value2
 
### Operators
* `==`
* `===`
* `!=`
* `!==`
* `>`
* `>=`
* `<`
* `<=`
* `||`
* `&&`
* `typeof`

### Example

```
{{#compare unicorns '!=' ponies}}
    I knew it, unicorns are NOT ponies!
{{/compare}}
```

## math helper

The `math` helper takes 3 arguments: value1 operator value2
 
### Operators
* `+`
* `-`
* `*`
* `/`
* `%`

### Example

```
<span>{{math 5 '+' 37}}</span>
```
Renders to:
```
<span>42</span>
```