const arr = [1,1,2,3,4,5,6,7,8,9,3];

const cars=['toyota', 'bmw', 'mercedes', 'tesla', "BMW", "Volvo", "Saab", "Ford"];

let x = new Date().getDay();
console.log(x);

let day = '7';

switch(x){
    case 0:
        day='sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}
console.log(day);