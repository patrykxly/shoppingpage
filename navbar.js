const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const formimages = document.getElementsByClassName("formImage");
const loginBottom = document.getElementsByClassName("logBottom");

/* function that shows menu on hamburger click */
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    if(formimages.length != 0){
      /* changing opacity of images in login page when closing menu */
      formimages[0].style.opacity = "1";
      formimages[1].style.opacity = "1";
    }
    if(loginBottom.length != 0)
      loginBottom[0].style.opacity = "1";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    if(formimages.length != 0){
      /* changing opacity of images in login page when opening menu */
      formimages[0].style.opacity = "0";
      formimages[1].style.opacity = "0";
    }
    if(loginBottom.length != 0)
      loginBottom[0].style.opacity = "0";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

let counterItem = document.createElement("p");
if(JSON.parse(localStorage.getItem(1)) != 0)
  counterItem.innerHTML = JSON.parse(localStorage.getItem(1));
else 
  counterItem.innerHTML = 0;
document.getElementsByClassName("navbar")[0].appendChild(counterItem);
counterItem.className = "cardVal";
