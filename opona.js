const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

/* adding event listeners for filter buttons */
for(i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        storeProducts.forEach((product) => {
              if(filter == "all") {
                  product.style.display = "block";
              }
              else {
                  if (product.classList.contains(filter)) {
                      product.style.display = "block";
                  }
                  else {
                      product.style.display = "none";
                  }
              }
          })
      })  
  }


const search = document.getElementById("search");

/* adding event listener for searching */
search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();
    for(i = 0; i < storeProducts.length;i++){
        if(storeProducts[i].innerHTML.toLowerCase().includes(searchValue)){
            storeProducts[i].style.display = "block";
        }
        else if(searchValue == ""){
            storeProducts[i].style.display = "block";
        }
        else{
            storeProducts[i].style.display = "none";
        }
    }
})


const addingButtons = document.querySelectorAll(".addToCardBtns");
class Products{
    constructor(name,price,src, num){
        this.name = name;
        this.price = price;
        this.src = src;
        this.num = num;
    }
}

let j = addingButtons.length;
window.localStorage.setItem(0,JSON.stringify(j));
for(let i = 0; i < j; i++){
    addingButtons[i].addEventListener("click", (e) =>{
        e.preventDefault();
        let product = new Products(e.target.parentNode.querySelector("h4").textContent,e.target.parentNode.querySelector(".cena").textContent,e.target.parentNode.querySelector("img").src,i+1,0);
        window.localStorage.setItem(i+1,JSON.stringify(product));
    })
}
