document.addEventListener("DOMContentLoaded",function(){
    var x = document.querySelector(".nut");
    var y = document.querySelector(".menutrai"); 
    var z = document.querySelector(".den");
    x.onclick = function(){
        y.classList.add("vetrai");
        z.classList.add("hienlen");
    }
    z.onclick = function(){
        y.classList.remove('vetrai');
        z.classList.remove('hienlen');
    }

    

},false)