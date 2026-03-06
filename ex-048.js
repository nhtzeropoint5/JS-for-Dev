// const { createElement } = require("react");



const clickbaj = () => {
fetch('https://jsonplaceholder.typicode.com/posts').
then(response => response.json()).
then(data => {displayPost(data);});
}

const displayPost = (posts) => {

    // const container = document.getElementById('post-con');
     const container = document.getElementById('pcontainer'); 
     container.innerHTML= "";

    posts.forEach(element => {

       
        const pcard = document.createElement('div');
        pcard.innerHTML = `<div class="post-card">
                           <h1>${element.title}</h1>
                           <p>${element.body}</p>
                            </div>`;

        container.appendChild(pcard);
        console.log(element);
        // const li = document.createElement('li');
        // li.innerText = element.title;
        // 
    });

}




// {userId: 4, id: 34, title: 'magnam ut rerum iure', body: 'ea velit perferendis earum ut voluptatem voluptate…enda accusamus dignissimos officia nesciunt nobis'}
// body
// : 
// "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
// id
// : 
// 34
// title
// : 
// "magnam ut rerum iure"
// userId
// : 
// 4
// [[Prototype]]
// : 
// Object