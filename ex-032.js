const fruits = ["Banana", "Orange", "Apple", "Mango", "litchi", "strawberry", "cherry", "avocado", "pineapple", "guava", "cranberry"];

const num = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6];
const mul_arr = [[1,2], [3,4], [5,6], [7,8]];

console.log(num.sort(function(a,b){return a-b}));
console.log(num.sort(function(a,b){return b-a}));