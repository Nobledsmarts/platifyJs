# platifyJs
A simple lightweight open source templating library in JavaScript

# usage
- Clone the platify.js library and link it in your html file using the JavaScript `script` tag:
```javascript 
  <script src="assets/platify.js"></script> 
```

Below is an example usuage for Platify Javascript Library. An **index.html** file

```html
    <!-- index.html -->
    <h1 id="element">%{content}% </h1>
```

## Syntax

```javascript
//main.js

your values object
let valuesObject = { key: "value" };
let platify = new Platify(valuesObject);
platify.mount("#mounting-element-selector");
```

```html
  <!-- index.html -->
  <h1 id="mounting-element-selector">This is the object key value - %{key}%</h1>
```

**output>**
This is the object value - value

