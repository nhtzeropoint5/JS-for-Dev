function isLeapYear(year){
    let result;
    
    if(year%400 === 0){
    result = true;
   }
   else if(year % 4 === 0 && year % 100 !== 0)
   {
    result = true;
   }
   else{
   result = false;
   }
   return result;

}

function oddAvg(arr){
    let sum =0;
    let count=0;
    for(let i of arr){
        if(i%2!=0)
        {
            sum+=i;
            count++;

        }
    }
    return (sum/count).toFixed(2);
}

function removeDup(arr){
    const noDup = new Set();
    for(let i of arr){
        noDup.add(i);
    }
    return noDup;
}


console.log(removeDup([1,2,5,3,4,5,2,13,4]));
