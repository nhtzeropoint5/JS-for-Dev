function removeDup(arr){


    const noDup = [];
    for(let i of arr){
        if(noDup.includes(i)){
            continue;
        }
        noDup.push(i);
    }
    return noDup;
}
const today = new Date();

const spDate = new Date(2091, 10, 3);

console.log(removeDup([1,2,5,3,4,5,2,13,4]));
console.log(Math.random());
console.log(spDate);

let x = 5, y = 7;
[x, y] = [y, x];

////it means x er value will be right er first value, y er value will be right eer 2nd value
console.log(x,y);

for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}

////setTimeout(callback, delay);“Run this function after delay milliseconds.”