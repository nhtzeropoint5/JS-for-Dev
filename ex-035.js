let bPrice = 300;

if(bPrice>500){
    console.log('free coke');
}
else{
    console.log(`price is ${bPrice + 30} tk`);
}

let weight = 44;
let height = 1.65;

let BMI = weight / Math.pow(height, 2);


if(BMI<18.5){
    console.log('underweight');
}
else if(18.5<= BMI && BMI<=24.9){
    console.log('normal');
}
else if(25<= BMI && BMI<=29.9){
    console.log('overweight');
}
else{
    console.log('obese')
}


let myScore = 90;
let friendScore = 90;


if(myScore>80){
    if(friendScore>80){console.log('go to lunch');}
    else if(friendScore>=60 && friendScore<=80){console.log('good luck');}
    else if(friendScore>=40 && friendScore<60){console.log('unseen');}
    else{ console.log('block');}
}
else { console.log('go home');}

let num1 = 4, num2=20;
let result = (num1>num2)?console.log(num1*2):console.log(num1+num2);

let age = 26;
let isStudent = true;

if(age<10) { console.log('free');}
else if (age>=10 && age<60) {
    if(isStudent){
        console.log('50% discount');}
    else{
        console.log('pay 800tk');
    }
    }
    
else if(age>=60){console.log('15% discount');}


const fruits = ["Banana", "Orange", "Apple", "Mango", "litchi", "strawberry", "cherry", "avocado", "pineapple", "guava", "cranberry"];

const alph = ['a', 'b', 'c', 'd'];

const neW = fruits.concat(alph); 

console.log(neW);