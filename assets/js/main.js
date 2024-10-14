const getcategories =  async () =>{
    const {data} = await axios.get(`https://dummyjson.com/products/category-list`);
    
   return data;

  

}

const displaycategories = async () =>{

    const categories = await getcategories();

    const result = categories.map ( (category) =>{
        return `<div class = 'category'>
        
        <a href='categoryDetails.html?category=${category}'>${category}</a>
        
        </div>`
        

}).join(' ');


document.querySelector(".categories .row").innerHTML += result;
};


const getproducts = async () =>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    return data;
};

const displayproducts = async () =>{

    const data = await getproducts();

    const result = data.products.map((product)=>{
        return `
         <div class = ' product '>

         <img src='${product.thumbnail}' alt='${product.description}' />
        <h3>${product.title}</h3>
        
        </div>
        `
    }).join(' ');

    document.querySelector(".products .row ").innerHTML += result;

};




displayproducts();
displaycategories();

