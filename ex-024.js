 
 function myFunctions(){

 let header = "Template Strings";
 let listy = ['JavaScript', 'test', 'cases', 'words', 'feels', 'nice'];

 let text = `<h2>${header}</h2><ul>`;

 for(const x of listy){
    text +=`<li> ${x} </li>`;
 }
 
 text+= `</ul>` ;
 document.getElementById('demo').innerHTML = text;

 }


 

 
 
