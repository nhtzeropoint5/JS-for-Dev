let text = ``;


loop1: for(let i=0; i<5; i++)
{
    loop2: for(let j = 5; j<10; j++)
    {
        if(j===7)
        {
            continue loop2;
        }
        text += i + `\n`;
    }
    
}

console.log(text);