function sayHello()
{
    return "Hello from the other side";
}

let z = sayHello();
console.log(z);

function multiply(a,b){
    return a*b;
}
let zee = multiply(5, 2);
console.log(zee);

function toCelcius(a=-40){
    return (a-32)*(5/9);
}

console.log(`420 farenheight is ${toCelcius()} degree celcius`);


function fullName(firstName, lastName){
    return firstName+' '+lastName;
}
console.log(fullName('Mr.', 'Bubby'));

x = findMax(1,2,3,4,5,6,7,8,9,10);
console.log(x);
function findMax(){
    let max = -Infinity;
    // 
    for(let i of arguments){
        if(i>max){
            max = i;
        }
    }
    return max;
}


//function expression

const x = function(a, b) {return a*b};

//arrow functions
let arrFunction = (a,b)=> a*b;
let hello = () => 'hello world';
let oneParam = x => x+1;

console.log(hello());