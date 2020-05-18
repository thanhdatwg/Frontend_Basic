document.addEventListener("DOMContentLoaded",function(){
    var x = document.getElementsByClassName('layer1');
    var y = document.getElementsByClassName('layer2');
    var trangthai = 1;
    for (var i = 0; i < x.length; i++) {
        x[i].onclick = function () {
            for (let j = 0; j < x.length; j++) {
                x[j].classList.remove('mautrang');    
            }
            this.classList.toggle('mautrang');
            if (trangthai==1) {
                console.log("click lan 1");
                trangthai = 2;
                x[0].classList.add('mautrang');
                
            }
            else if (trangthai==2) {
                console.log("click lan 2");
                trangthai = 1;
                x[0].classList.remove('mautrang');
                
            }
        }   
        
    }
},false)