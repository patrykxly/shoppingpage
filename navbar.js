const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const formimages = document.getElementsByClassName("formImage");

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
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    if(formimages.length != 0){
      /* changing opacity of images in login page when opening menu */
      formimages[0].style.opacity = "0.1";
      formimages[1].style.opacity = "0.1";
    }
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)