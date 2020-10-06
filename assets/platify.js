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
		let allTemplate = document.querySelector(element);
		let templateContents = allTemplate.innerHTML.split('%');
		let templateContentsNow = '';
		templateContents.forEach(templateContent=>{
			if(templateContent.match(/{[a-zA-Z0-9]+}/g)){
				templateContent = eval('this.templateInfo.'+templateContent.match(/{[a-zA-Z0-9]+}/g)[0].replace(/{/g, '').replace (/}/g, ''));
			}
			templateContentsNow += templateContent;
		});
		templateContents = templateContentsNow;
		allTemplate.innerHTML = templateContents;
	}
};