var prodBorders = document.querySelectorAll(".prodBorder");

prodBorders.forEach(
    function(prodBorder){
        prodBorder.addEventListener("mouseover",function(){
            prodBorder.style.backgroundColor = "#DCDCDC";
        })
        prodBorder.addEventListener("mouseout",function(){
            prodBorder.style.backgroundColor = "#f3f3f3";
        })
    }
)

var addBtns = document.querySelectorAll(".addToCardBtns");

addBtns.forEach(
    function(addBtn){
        addBtn.addEventListener("mouseover",function(){
            addBtn.style.backgroundColor = 'rgb(186, 0, 0)';
        })
        addBtn.addEventListener("mouseout",function(){
            addBtn.style.backgroundColor = 'rgb(168, 64, 22)';
        })
    }
)