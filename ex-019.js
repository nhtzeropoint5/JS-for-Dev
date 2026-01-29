const friends = ['a', 'b', 'c', 'd']

const arr = [1,1,2,3,4,5,6,7,8,9,3];
console.log(arr.reverse());

const arr2 = [];
j = arr.length - 1;

for(let i=0; i<arr.length; i++){
    arr2[j] = arr[i];
    j--;
}


for (let x of arr){
    arr2.unshift(x);
}
console.log(arr2);