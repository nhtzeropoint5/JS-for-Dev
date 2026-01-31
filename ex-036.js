for(let i=1; i<=10; i++){
    console.log(`9 x ${i} : ${9*i}\n`);
}

const carObj = {
    name:'toyota',
    buyingYear: 2015,
    price: '26L',
    user: 'Mom',
    driver: 'fokrul',
    'golden rod' : '#daa520',
    fullDetails : function(){return this.name+" "+this.driver;},
}

carObj['passenger capacity'] = 5;

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

let count=0;

for(let i in student){
    count++;
}
console.log(count);
console.log(student.physics.marks);


let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};


for(const [key,value] of Object.entries(myObject)){
    console.log(`key: ${key} | ${typeof(value)}`);
}


