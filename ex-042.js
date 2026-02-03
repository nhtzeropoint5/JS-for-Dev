// const element = document.getElementsByTagName('h3');



// This example finds the element with id="main", and then finds all <p> elements inside "main":



// const x = document.getElementsByClassName("intro");
const x = document.querySelectorAll('.intro');
// // const y =  x.getElementsByTagName('p');

let text='';
for(let i of x){
    text+= i.innerText + " ";
}

// document.getElementById("demo").innerHTML = 'The first paragraph (index 0) inside "main" is: ' + x[0]; x[0].innerHTML


document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + text;