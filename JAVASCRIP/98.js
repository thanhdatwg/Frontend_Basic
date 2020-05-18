document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById('click');
    var trangthai = 1;
    var chuyendong = document.getElementById('kcd');
    nut.onclick = function(){
        if (trangthai == 1) {
            console.log("click lan 1");
            trangthai = 2;
            chuyendong.classList.add('sangphai');
            
        }
        else if (trangthai == 2) {
            console.log("click lan 2");
            trangthai = 1;
            chuyendong.classList.remove('sangphai');
        }
        
    }
},false)
