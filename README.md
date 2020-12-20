# platifyJs
a simple lightweight open source templating library in JavaScript

## syntax
```JAVASCRIPT
//main.js
//initialize platify class
then reference the element to map for variables
let platify = new Platify();
platify.template("body");
```
```HTML
<!--index.html-->
<body>
<h1>%[key]%</h1>
</body>
```
## usage
```HTML
<!--index.html-->;
<body>
<h1>%[content]%</h1>
</body>
```
```JAVASCRIPT
//main.js
let content = "Hello World!";

let platify = new Platify();
platify.template('body');
```
output:>
Hello World!
