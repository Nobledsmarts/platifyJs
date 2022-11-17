/*
** platify.js - A simple lightweight templating library in JavaScript
** © Ese Curtis (Esecodes)
** 6-10-2020
*/

class Platify{
    template(elementName = "*"){
        document.querySelectorAll(elementName).forEach(element => {
            let elementValues = element.innerHTML.split("%");
            for (let index = 0; index < elementValues.length; index++) {
                if(elementValues[index][0] == "[" && elementValues[index][elementValues[index].length - 1] == "]"){
                    elementValues[index] = elementValues[index].split("");
                    elementValues[index].pop();
                    elementValues[index].shift();
                    elementValues[index] = elementValues[index].join("");
                    elementValues[index] = eval(elementValues[index]);
                }
            }
            element.innerHTML = elementValues.join("");
        });
    }
}
