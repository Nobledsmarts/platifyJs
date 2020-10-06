/*
** platify.js - A simple lightweight templating library in JavaScript
** © Ese Curtis (Esecodes)
** 6-10-2020
*/

class Platify{
//initializing the templating data 
	constructor(templateInfo){
		this.templateInfo = templateInfo;
	}
//appending on element with the specific object in curly brackets
	mount(element){
		let root = document.querySelector(element);
		if(root){
			let rootContents = root.innerHTML;
			let regex = /\%{(.+?)}\%/ig;
			rootContents = rootContents.replace(regex, (match) => {
				let prop = match.slice(2, -2);
				return eval('this.templateInfo.' + prop);
			});
			root.innerHTML = rootContents;
		}
	}
};
