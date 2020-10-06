# platifyJs
a simple lightweight open source templating library in JavaScript

## syntax

//main.js

your values object
let values = { key : value };
let platify = new Platify(values);
platify.mount(rootElement);

//index.html
&lt;body id="rootElement"&gt;
&lt;h1>%{key}% &lt;/h1>
&lt;/body&gt;

## usage

//index.html
&lt;body id="root"&gt;
&lt;h1 id="element">%{content}% &lt;/h1>
&lt;/body&gt;
//main.js

let values ={
  content:"Hello World!"
};

let platify = new Platify(values);
platify.mount('#root');
output:>
Hello World!
