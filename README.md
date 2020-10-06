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

The **main.js** file contians the following code

```javascript
//main.js

let values ={
  content:"Hello World!"
};

let platify = new Platify(values);
platify.mount('#element');
```

```
output:>
Hello World!
```

## Syntax

```javascript
//main.js

your values object
let value = { object elements };
let platify = new Platify(values);
platify.mount(mounting element);
```

```html
  <!-- index.html -->
<h1 id="mounting element">%{the object element}% &lt;/h1>
```
