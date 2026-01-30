const fruits = ["Banana", "Orange", "Apple", "Mango", "litchi", "strawberry", "cherry", "avocado", "pineapple", "guava", "cranberry"];

const num = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6];

console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.at(3));



console.log(fruits.join('*'));

console.log(fruits.concat(num));

////join will turn an array into a string. it will not join two arrays. if you try to give input like concat it will use the array inside the first bracket as a separator. that is why that weird output was given.

console.log(Array.isArray(num));
console.log(fruits.copyWithin(4, 0));
console.log(fruits.copyWithin(4, 0, 2));

////array.copyWithin(target, start, end)

const mul_arr = [[1,2], [3,4], [5,6], [7,8]];
console.log(mul_arr.flat())

//flatMap is probably used only one 1dimensional array.
console.log(num.flatMap(x=> [x, x*10]));

console.log(num.slice(7, 10));
console.log(num.splice(7,1,10));

////slice method will slice the array from the given index to the end and onwards if no end index is given or to the last index specified