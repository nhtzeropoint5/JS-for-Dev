// string operation

function myFunctions()
{
    let x = document.getElementById('first_name').value;
    let y = document.getElementById('last_name').value;

    document.getElementById('demo').innerText = `Welcome to Catbook, ${x} ${y}`;
}

function myFunction0(){
    let z = document.getElementById('age').value;
    document.getElementById('age_display').innerText = `you are ${z*12} months old`;
}