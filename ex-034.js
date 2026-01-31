const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello " + name);
  rl.close();
});



let money = 1000;
let cost = 300;
console.log(money-cost);

let arr=[75.25, 65, 80, 35.45, 99.5];

let arr2= arr.reduce(function(total, value){ return total+=value;})

let avg = arr2/5;
console.log(avg.toFixed(2));
console.log(251119%5);

console.log(isNaN('12367'));
////isNan will return false if the string inside it is a genuine number even if it is inside quotation marks

console.log(isNaN(5));

