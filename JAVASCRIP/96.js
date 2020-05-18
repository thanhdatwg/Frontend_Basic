// var a = document.querySelectorAll('.n1');
// // console.log(a);
// console.log(a[0].classList.remove('btn-outline-secondary'));
// a[0].classList.add('btn-outline-secondary');
document.addEventListener("DOMContentLoaded",function () {
    var x1 = document.getElementById('n1')  
    console.log(x1);
    x1.onclick = function () 
    {
        x1.classList.add('dixuong');
        console.log(x1);
        
    }
    
},false)
