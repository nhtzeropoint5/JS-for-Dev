const arr = [1,1,2,3,4,5,6,7,8,9,3];
console.log(arr.sort());

const cars=['toyota', 'bmw', 'mercedes', 'tesla', "BMW", "Volvo", "Saab", "Ford"];
// for(i=0; i<cars.length; i++)
// {
//     console.log(cars[i]);
// }
let text = '';
for(i=0; i<5;)
{
  text += cars[i]+" ";
  i++;
}
console.log(text);