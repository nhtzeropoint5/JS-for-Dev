const sentence = "I am learning web dev" ;

for(let letter of sentence)
{
    console.log(letter);
}



let reverse = '';
for(let letter of sentence)
{
    reverse = letter + reverse;
}
console.log(reverse);

const reversed = sentence.split('').reverse().join('');
console.log(reversed);