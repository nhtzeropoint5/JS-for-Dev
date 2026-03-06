const numbers = [1,34,2,4,5,6,65,4];



function matchedProducts(products, search){
    const matched = [];
    for(const product of products){

        if(product.ind.includes(search)){
            matched.push(product);
        }
       
    }
    return matched;

}


const products = [{name: 'A', Type : 1, id : 1, ind : "search"},
                  {name: 'B', Type : 2, id : 2, ind : "bsearch" },
                  {name: 'C', Type : 3, id : 3, ind : "nsearch"},
                  {name: 'D', Type : 4, id : 4, ind : "search"},
                  {name: 'E', Type : 5, id : 5, ind : "search"}]


 console.log(matchedProducts(products, 'bsearch'));