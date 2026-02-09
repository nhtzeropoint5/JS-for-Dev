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

    if(i==3){
        if(isNaN(y) || y<0 || y>30){
            alert(`please enter a valid number`);
        }
    }

    values.push(y);
    text+=y+' ';
}






document.getElementById("demo").innerHTML = 
'Bubby bolse: ' + text;

}

