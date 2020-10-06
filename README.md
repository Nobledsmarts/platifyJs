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
lt;!--index.html--&gt;
&lt;body id="rootElement"&gt;
&lt;h1>%{key}% &lt;/h1>
&lt;/body&gt;
```
## usage
```HTML
&lt;!--index.html--&gt;
&lt;body id="root"&gt;
&lt;h1 id="element">%{content}% &lt;/h1>
&lt;/body&gt;
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
