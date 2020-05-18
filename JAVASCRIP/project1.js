document.addEventListener("DOMContentLoaded",function(){
    var x = document.querySelector(".menu");
    window.addEventListener("scroll",function(){
        if (window.pageYOffset > 100) {
            x.classList.add("mauden");
        }
        else if(window.pageYOffset <100){
            x.classList.remove("mauden");
        }
    })
},false) 