const str = 'aaaa bcd bubby aninia AAA komba neha aditto';
let count = 0;


for(const ch of str){
    if(ch=='a'){
        count++;
    }
}

   console.log(str.includes('a', 'e', 'i', 'o', 'u', 'z'));


str1 = str.replaceAll('a', 'A').replaceAll('b', 'B');
console.log(str1);

const sarr = str.split(' ');



const larr = sarr.forEach(function(value){ return value.charAt(0).toUpperCase+value.slice(1)});

console.log(...sarr.forEach(function(value){ return value.charAt(0).toUpperCase+value.slice(1)}));

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords(str));

function reverse_word(){
    return str.split(' ').reverse().join(' ');
}

 console.log(reverse_word(str));

const objar = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for(let x of objar){
    for(let y in x){
        console.log(x[y]);
    }
}

function func_1(a,b,c,d){
    return a*b*c*d;
}

function make_avg(arr){
    return arr.reduce(function(total,value){return total+=value}) / arr.length;
}

let str2= str.match(/a/g);
console.log(str2.length);


function countNum(a, arr){
    return arr.filter(x => x===a).length;
}



const num = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6];

console.log(countNum(25, num));

