var prodCard = document.getElementById("products");
let gotObject;

const removeAllBtn = document.getElementById("removeAll");
removeAllBtn.addEventListener("click", (e) =>{
    localStorage.clear();
    document.location.reload();
    document.getElementById("buyBtn").style.display = "none";
    localStorage.setItem(1, 0);
})

function addObject(obj){
    document.getElementById("buyBtn").style.display = "inline-block";
    document.getElementById("noProducts").style.display = "none";
    let tag = document.createElement("div");
    let txt = document.createElement("p");
    let price = document.createElement("p");
    let image = document.createElement("img");
    let deleteBtn = document.createElement("button");
    let amountOfProduct = document.createElement("label");
    let plusBtn = document.createElement("btn");
    let minusBtn = document.createElement("btn");
    plusBtn.innerHTML = "+";
    minusBtn.innerHTML = "-";
    amountOfProduct.innerHTML = obj.amount;
    price.innerHTML = obj.price;
    plusBtn.addEventListener("click",(e) =>{
        obj.amount += 1;
        localStorage.setItem(1, JSON.parse(localStorage.getItem(1))+1);
        amountOfProduct.innerHTML = obj.amount;
        localStorage.setItem(obj.num, JSON.stringify(obj));
        window.location.reload();
    })
    minusBtn.addEventListener("click", (e) =>{
        if(obj.amount>0){
            obj.amount -= 1;
            localStorage.setItem(1, JSON.parse(localStorage.getItem(1))-1);
            amountOfProduct.innerHTML = obj.amount;
            localStorage.setItem(obj.num, JSON.stringify(obj));
            window.location.reload();
        }
    })
    if(obj.amount == 0){
        localStorage.removeItem(obj.num);
        window.location.reload();
    }
    deleteBtn.innerHTML = "Usuń produkt";
    txt.innerHTML = obj.name;
    price.innerHTML = obj.price.replaceAll(',','.')*obj.amount;
    price.innerHTML += "zł";
    image.src = obj.src;
    prodCard.appendChild(tag);
    tag.innerHTML = "<br>";
    tag.appendChild(image);
    txt.appendChild(price);
    tag.appendChild(txt);
    tag.appendChild(minusBtn);
    tag.appendChild(amountOfProduct);
    tag.appendChild(plusBtn);
    tag.appendChild(deleteBtn);
    image.classList.add("addedImage");
    txt.classList.add("addedProductText");
    tag.classList.add("addedContainer");
    price.classList.add("addedPrice");
    deleteBtn.classList.add("addedBtn");
    amountOfProduct.classList.add("addedAmount");
    plusBtn.classList.add("addedAmountBtn");
    minusBtn.classList.add("addedAmountBtn");
    minusBtn.classList.add("minus");
    deleteBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        localStorage.removeItem(obj.num);
        localStorage.setItem(1, JSON.parse(localStorage.getItem(1))-obj.amount);
        window.location.reload();
    })
}

for(let i = 2; i < JSON.parse(localStorage.getItem(0))+2; i++){
    gotObject = JSON.parse(localStorage.getItem(i));
    if(gotObject){
        addObject(gotObject);
    }
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
