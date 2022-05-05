var data = JSON.parse(localStorage.getItem("cartItem"));

var p = document.querySelector("#product_price11");
var p1 = document.querySelector("#product_price12");
var d = document.querySelector("#product_name11");
var d1 = document.querySelector("#product_name12");
var img = document.querySelector("#product_big_img")

var s = document.querySelector("#select_size");
// s.addEventListener("load",function(){
    
//     var mm = document.querySelector("#select_size").value;
// })

d.textContent=data.product_n;
d1.textContent=data.product_n;
img.setAttribute("src",data.image_url)
// document.querySelector("#select_size1").textContent=mm;

var btn = document.querySelector(".addToCart");
    btn.addEventListener("click",function (){ window.location.href="signUp.html"})


    var Discount = Math.floor((data.price * 20) / (100));
           
    var orignal_price = document.querySelector("#orignal_price11");
    var orignal_price1 = document.querySelector("#orignal_price12");
    orignal_price.textContent=data.price;
    orignal_price1.textContent=data.price;


    p.textContent=(data.price - Discount);
    p1.textContent=(data.price - Discount);
