data = JSON.parse(localStorage.getItem("cartItem"));
//console.log(data)
var pro_img1 = document.querySelector("#pro_img");
pro_img1.setAttribute("src",data.image_url)
console.log(data.price,data.image_url,data.product_n)

var pro_name = document.querySelector("#prod_name");
pro_name.textContent=data.product_n;

var pro_price = document.querySelector("#product_price");
pro_price.textContent=data.price;

var left_price = document.querySelector("#t_price");
left_price.textContent=data.price;

var total = (80+(+data.price))-100;
var t_price = document.querySelector("#total_price");
t_price.textContent=total;
