// basic layout 
// id = setInterval(frame, 5);

// function frame() {
//   if (/* test for finished */) {
//     clearInterval(id);
//   } else {
//     /* code to change the element style */ 
//   }
// }



function newPrice(currentPrice, discount){

    if(!(typeof currentPrice === "number")||!(typeof discount==="number"))
    {    
        return "Invalid";
    }
    else if(discount<0 || discount> 100)
    {
        return "Invalid";
    }
    else
    {
        return (currentPrice*(1-(discount/100))).toFixed(3);
    }

}








function validOtp(str){

    if(!(typeof str === "string")){
        return "Invalid";
    }
    else if(str.length==8 && str.startsWith('ph-')){
        return true;
       }
    else{
        return false;
    }
}







function finalScore(obj){

    if(!(obj.right + obj.wrong + obj.skip === 100) ||  !(typeof obj === 'object'))
    {
        return "Invalid";
    }
    else{
        return Math.round(obj.right * 1 - obj.wrong * 0.5);
    }
}









function  gonoVote(arr){

    if(!(Array.isArray(arr)))
    { 
        return "Invalid";
    }

    let arr1 = arr.filter(function(value){ return value == 'ha'});
    let arr2 = arr.filter(function(value){ return value == 'na'});

    
    if(arr1.length>arr2.length)
    {
        return true;
    }
    else if(arr1.length==arr2.length){
        return "equal";
    }
    else{
        return false;
    }
}










function  analyzeText(str){

     if(!(typeof str==="string")|| str === "")
    { 
        return "Invalid";
    }



    let arr = str.split(' ');
    let n = -Infinity;
    let word;
        for(let x of arr){
        if(x.length > n){
            n = x.length;
            word = x;
        }
    }

    let len = arr.join('').length;

    let obj = {};
    obj.longwords = word;
    obj.token = len;
    
    return obj;
}

console.log(analyzeText("bubby1 bubby2 bubby3"));