const fruits = ["Banana", "Orange", "Apple", "Mango", "litchi", "strawberry", "cherry", "avocado", "pineapple", "guava", "cranberry"];

const num = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6];
const mul_arr = [[1,2], [3,4], [5,6], [7,8]];

let txt = '';

num.forEach(myFunction);

function myFunction(value, index){
        txt+=index+': '+value+'\n';
}

const num2 = num.map(myFunction_1);

function myFunction_1(value, index){

    let x = value/2;
    txt += index+': '+x+'\n';
    return x;
}

const num3 = num.flatMap((x)=>{return x*2});
const num4 = num.filter(function(value){return value>3});
const num5 = num.reduce(function(total, value, index, array){return total+value});
const num6 = num.every(function(value, index, array){return value < 10});

//like every there is also some to check if some value passes a given test
let text = "abcdefghighijklmmnopqrstwxyz"

const family = ['Nuz Neha','Kombu', 'Bob', 'Polo Nyan'];



console.log(Array.from(num, (x)=>x*2));

for(let i of fruits.entries()){
    console.log(i);
}

console.log(family.with(0,'Neha'));
const txt1 = [...family, ...mul_arr];

const txt2 = [...family];

let min = Math.min(...num);
let max = Math.max(...num);


console.log(min, max);

// console.log();