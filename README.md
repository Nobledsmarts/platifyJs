# platifyJs
a simple lightweight open source templating library in JavaScript


## usage

//index.html

&lt;h1 id="element">%{content}%</h1>

//main.js

let values ={
  content:"Hello World!"
};

let platify = new Platify(values);
platify.mount('#element');
output:>
Hello World!

## syntax

//main.js

your values object
let value = { object elements };
let platify = new Platify(values);
platify.mount(mounting element);

//index.html

&lt;h1 id="mounting element">%{the object element}%</h1>

