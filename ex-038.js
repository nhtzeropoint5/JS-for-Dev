const str = 'aaaa bcd bubby aninia AAA komba neha aditto';


if(str.includes('a') &&
str.includes('e') &&
str.includes('i') &&
str.includes('o') &&
str.includes('z')){

    console.log('yes');
}
else{
    console.log('no');
}

function vowelCounter(str){

    let arr=['a','e','i','o','u'];
    let n = 0;
    for(let x of arr){
        n += [...str.matchAll(x)].length; 

    }

    return n;
}


let arr=['a','e','i','o','u'];
for(let x of arr){
       console.log(x); 

    }
let n = [...str.matchAll('n')].length; 

function longWord(str){
    let arr = str.split(' ');
    let n = Infinity;
    let word;
        for(x of arr){
        if(x.length < n){
            n = x.length;
            word = x;
        }
    }

    return word;
}

// const str = "I am learning Programming to become a programmer"


function small(num){
    return Math.min(...num);
}

console.log(small([167, 190, 120, 165, 137])); 