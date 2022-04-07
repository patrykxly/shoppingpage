var prodCard = document.getElementById("products");
var gotObject = JSON.parse(localStorage.getItem('storage'));

const removeAllBtn = document.getElementById("removeAll");
removeAllBtn.addEventListener("click", (e) =>{
    localStorage.clear();
    document.location.reload();
    document.getElementById("buyBtn").style.display = "none";
})

function addObject(obj){
    document.getElementById("buyBtn").style.display = "inline-block";
    document.getElementById("noProducts").style.display = "none";
    let tag = document.createElement("div");
    let txt = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Usuń produkt";
    txt.innerHTML = obj.name;
    price.innerHTML = obj.price;
    price.innerHTML += "zł";
    image.src = obj.src;
    prodCard.appendChild(tag);
    tag.innerHTML = "<br>";
    tag.appendChild(image);
    txt.appendChild(price);
    tag.appendChild(txt);
    tag.appendChild(deleteBtn);
    image.classList.add("addedImage");
    txt.classList.add("addedProductText");
    tag.classList.add("addedContainer");
    price.classList.add("addedPrice");
    deleteBtn.classList.add("addedBtn");
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        localStorage.removeItem(obj.num);
        window.location.reload();
    })
}

for(let i = 1; i < JSON.parse(localStorage.getItem(0))+1; i++){
    var gotObject = JSON.parse(localStorage.getItem(i));
    if(gotObject)
        addObject(gotObject);
}

const buyingButton = document.querySelector("#buyBtn");
buyingButton.addEventListener("click", (e) => {
    document.querySelector("#productsContainer").style.display = "none";
    localStorage.clear();
    document.querySelector("h1").style.display = "none";
    let boughtTxt = document.createElement("h1");
    boughtTxt.textContent = "Dziękujemy za zakupy!";
    console.log(document.getElementsByTagName("main"));
    document.getElementsByTagName("main")[0].append(boughtTxt);
    boughtTxt.classList.add("addedBoughtTxt"); 
})
