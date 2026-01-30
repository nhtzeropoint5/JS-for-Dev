//arrays

const fruits = ["Banana", "Orange", "Apple", "Mango"];


fruits.forEach(function(value){ console.log(value);});

console.log(myFunction(fruits.forEach()));

function myFunction(value){
    return value;
}

const myObj = {
    name: 'john',
    age: 30,
    family : [
        {name: "Jane", relationship: "wife", age: 30, isHuman: true, food: ['steak', 'salad', 'barbecue']
        },
        {name: "Bob", relationship: "son", age: 5, isHuman: false,
         food: ['fish', 'chicken', 'egg']
        },
        {name: "Alice", relationship: "daughter", age: 5, isHuman: false, food: ['catfood', 'treat', 'wetfood']}
    ]
}

for(let i in myObj.family){

    for(let j in myObj.family[i].food)
    {
            console.log(myObj.family[i].food[j]);
    }

}