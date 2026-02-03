function ValidateForm(){
    let x = document.forms['BobForm'];


let text='';
let values=[];

for(let i=1; i<=4; i++){
    let y = x['val'+i].value;
   
    if(y==''){
    alert(`${ x['val'+i].name} must be fulfilled`)
    return false;
    }

    values.push(y);
    text+=y+' ';
}



document.getElementById("demo").innerHTML = 
'Bubby bolse: ' + text;

}

