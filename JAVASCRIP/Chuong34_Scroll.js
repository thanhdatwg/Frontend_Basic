document.addEventListener("DOMContentLoaded",function () {
    var x = document.querySelector('.menu');
    var trangthai = true;
    window.addEventListener("scroll",function () {
      if (window.pageYOffset > 300 ) {
          x.classList.add('keora');
        //   if (trangthai == true) {
        //       console.log("oke roi");
        //       trangthai = false;
        //   }
      }
      else if (window.pageYOffset <= 300) {
            x.classList.remove('keora');         
      }
        
    })    
},false)