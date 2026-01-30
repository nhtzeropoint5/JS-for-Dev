const carObj = {
    name:'toyota',
    buyingYear: 2015,
    price: '26L',
    user: 'Mom',
    driver: 'fokrul',
    fullDetails : function(){return this.name+" "+this.driver;},
}


const arr = Object.values(carObj);
const arr_ = Object.keys(carObj);

console.log(arr);
console.log(arr_);

let text =  JSON.stringify(carObj);
console.log(text);


for(let [key_, value_] of Object.entries(carObj)){

    console.log(key_+': '+value_);
}