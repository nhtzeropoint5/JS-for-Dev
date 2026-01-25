function myFunctions()
{

let checkVal = document.getElementById('agree'); 

let isMember= checkVal.checked;
let discount = isMember? 0.8 : 1;
let price = Number(document.getElementById('box').value) * discount;

document.getElementById('print').innerHTML = "You need to pay " + price;
}


