let day;
 
switch (new Date().getDay()) {
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Today is workday";
}

console.log(day);
