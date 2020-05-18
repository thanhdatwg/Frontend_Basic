document.addEventListener("DOMContentLoaded",function(){
   var x = document.getElementsByClassName('layer1');
   var y = document.getElementsByClassName('layer2');
   for (var i = 0; i < x.length; i++) {
      x[i].onclick = function () {
         // console.log(this.classList);
         if (this.classList[1] == 'mautrang') {
            this.classList.remove('mautrang');
            // để bỏ đi phần nội dung hiển thị ra có 2 cách 
            // cách 1
            var ndhienlen = this.getAttribute('data-hienra');
            var phantuhienra = document.getElementById(ndhienlen);
            phantuhienra.classList.remove('ra');

            // cách 2
            // for (let j = 0; j < y.length; j++) {
            //    y[j].classList.remove('ra')
               
            // }
      }
         else{
               
         for (var j = 0; j < x.length; j++) {
            x[j].classList.remove('mautrang');
         }
         this.classList.add('mautrang');
         var ndhienlen = this.getAttribute('data-hienra');
         // console.log(ndhienlen);
         var phantuhienra = document.getElementById(ndhienlen);
         // console.log(phantuhienra);
         for (var k = 0; k < y.length; k++) {
            y[k].classList.remove('ra');
         }
         phantuhienra.classList.add('ra');
               
            
         }
         

      }
   }
},false)
