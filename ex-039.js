//12 inch == 1 feet

function inchToFeet(inch){
    let x = (inch/12).toFixed(2);
    return x;
}

function inchToFeetStr(inch){
    let x = parseInt(inch/12);
    y = inch%12;
    return  `height is ${x} foot ${y} inch`;
    // let y = Math.floor(x);
    // return  `height is ${y} foot ${((x-y)*10).toFixed(2)} inch`;
}

console.log(inchToFeetStr(70));