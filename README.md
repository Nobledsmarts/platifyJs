# platifyJs
a simple lightweight open source templating library in JavaScript

## syntax
```JAVASCRIPT
//main.js
//your values object
let values = { key : value };
let platify = new Platify(values);
platify.mount(rootElement);
```
```HTML
<!--index.html-->
<body id="rootElement">
<h1>%{key}% </h1>
</body>
```
## usage
```HTML
<!--index.html-->;
<body id="root">
<h1>%{content}%</h1>
</body>
```
```JAVASCRIPT
//main.js
let values ={
  content:"Hello World!"
};

let platify = new Platify(values);
platify.mount('#root');
```
output:>
Hello World!
