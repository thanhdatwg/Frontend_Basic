var mangdl = [
    {   
        id : 1,
        ten : "DAT",
        tuoi : 21,
        nghenghiep : "SinhVien"
    },
    {   
        id : 2,
        ten : "CHI",
        tuoi : 19,
        nghenghiep : "SinhVien"
    }
];
for (let i = 0; i < mangdl.length; i++) {
    var noidung = `<div class="person" id = "${mangdl[i].id}">
                        <h1>${mangdl[i].ten}</h1>
                        <h2>${mangdl[i].tuoi}</h2>
                        <h3>${mangdl[i].nghenghiep}</h3>
                    </div> ` 
    // var noidung = `${mangdl[i].id},
    // ${mangdl[i].ten}   `;
    var phantumoi = document.createElement('h1');
    phantumoi.innerHTML = noidung;
    var bo = document.getElementById('cmt');
    bo.appendChild(phantumoi);
   
}
// var phantu = document.createElement('h1');
// phantu.innerHTML="Day la noi dung ben trong";
// var khoito = document.getElementById('cmt');
// khoito.appendChild(phantu);




