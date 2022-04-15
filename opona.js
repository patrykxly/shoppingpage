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
    constructor(name,price,src, num, amount, isInStorage = false){
        this.name = name;
        this.price = price;
        this.src = src;
        this.num = num;
        this.amount = amount;
        this.isInStorage = isInStorage;
    }
}


let j = addingButtons.length;
window.localStorage.setItem(0,JSON.stringify(j));
for(let i = 0; i < j; i++){
    addingButtons[i].addEventListener("click", (e) =>{
        if(localStorage.getItem(i+2) && JSON.parse(localStorage.getItem(i+2)).isInStorage == true){
            const product = JSON.parse(localStorage.getItem(i+2));
            product.amount+=1;
            localStorage.setItem(i+2,JSON.stringify(product));
            console.log(product);
        }
        else{
            const product = new Products(e.target.parentNode.querySelector("h4").textContent,e.target.parentNode.querySelector(".cena").textContent,e.target.parentNode.querySelector("img").src,i+2,1);
            product.isInStorage = true;
            localStorage.setItem(i+2,JSON.stringify(product));
            console.log(product);
        }
        localStorage.setItem(1, JSON.parse(localStorage.getItem(1))+1);
        window.location.reload();
    })
}
