let str1 = "hello hello";

let text = "What's on my mind? I think i'm finding coding fun. i wish to keep my consistency"

console.log(text.indexOf('\'', 15));
console.log(text.lastIndexOf('hello'));
console.log(text.search('on'));
console.log([...text.matchAll('i')]);
console.log(text.includes('on'));
console.log(text.startsWith('Wh'));
console.log(text.startsWith('on'));
console.log(str1.endsWith('h', -5));
