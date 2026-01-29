let arr=[];
let j=0;
for(i=1; i<=20; i++)
{
    console.log(i);

    arr.push(i*i);

    if(arr.includes(i))
    {
        console.log("yes");
    }
}

// ```backtick