

function myFunctions(){
    let age;
    age = Number(document.getElementById('box').value);
    // console.log(age);
    // document.getElementById('print').innerHTML= "this " + age;
    if(isNaN(age)){
        document.getElementById('print').innerHTML= "Please input a number";
    }
    else{
        let voteable = (age<18) ? "Too young" : "Eligible" ;

        document.getElementById('print').innerHTML= voteable + " to vote";
    }
}