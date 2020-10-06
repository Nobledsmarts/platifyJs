let contents = {
	header:'<h1>xeptre.com</h1>',
	body:'we are the good ppl',
	footer:'<h3>© esecodes</h3>',
};

let myContents = new Platify(contents);
myContents.mount('#header');
myContents.mount('#body');
myContents.mount('#footer');