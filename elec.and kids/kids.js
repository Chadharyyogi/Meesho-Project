var data = JSON.parse(localStorage.getItem("AllCloth")) || [
    {
        image_url: "https://images.meesho.com/images/products/50809619/7cxlb_512.jpg",
        product_n:"PINK UNICORN AND WHITE RABBT",
        price:426,
        discount:"₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/49652451/g6dig_512.jpg",
        product_n:"Pretty Classy Boys Dungarees",
        price:242,
        discount:"₹40 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/91504717/yct1y_512.jpg",
        product_n:"Kids New Born Baby Soft Pillow/ Head Shaper Pillow",
        price:286,
        discount:" ₹40 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/45327739/2giz3_512.jpg",
        product_n:"Pink elephant motu patlu pikachu minion pink teddy blue teddy red teddy ",
        price:250,
        discount:" ₹40 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/82117320/gkmw4_512.jpg",
        product_n:"Cute Classy Girls Frocks & Dresses",
        price:351,
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/33593414/cajsm_512.jpg",
        product_n:"Double Bed Polyester Fordable Mosquito Net",
        price:543,
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/29674256/fc87e_512.jpg",
        product_n:"Alluring Baby Mosquito Nets",
        price:236,
        discount:" ₹41 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/90923865/dbptm_512.jpg",
        product_n:"apple shape kids led watch pack of 1 Black",
        price:85,
        discount:" ₹14 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/12461800/3df7c_512.jpg",
        product_n:"Beautiful Kids Unisex Watches",
        price:156,
        discount:" ₹27 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/2244829/1_512.jpg",
        product_n:"Trendy Plastic & Rubber Digital Kid's Watches Combo",
        price:174,
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/71997715/iddyx_512.jpg",
        product_n:"barbie princess watch kids for girls unique watch with digital light",
        price:142,
        discount:" ₹24 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/68897335/fvhmo_512.jpg",
        product_n:"pink rabbit",
        price:136,
        discount:" ₹24 discount on 1st order",
    },
];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if(selected == "high") {
        data = data.sort(function (a, b){
            return b.price - a.price;
        });
    }
    else if(selected == "low") {
        data = data.sort(function (a, b){
            return a.price - b.price;
        });
    }
    
    console.log(data);
    displayItem(data);
}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent="Toys/All Baby Care Accessories";
startdiv.append(h2);
var para = document.createElement("p");
para.textContent="Showing 1-16 out of 100";
startdiv.append(para);
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");
body.append(mainDiv);

displayItem(data);
    function displayItem(data){
    document.querySelector("#container").innerHTML="";
    data.map(function(item){
    var box = document.createElement("div");
    box.setAttribute("class", "box");

    box.addEventListener("click",function(){
        // addToCart1(item)
        localStorage.setItem("cartItem",JSON.stringify(item))
        window.location.href="meesho_productDetail.html"
        //console.log(item)
    })

    mainDiv.append(box);
    var image = document.createElement("img");
    image.setAttribute("src", item.image_url);
    box.append(image);
    var innerbox = document.createElement("div");
   innerbox.setAttribute("class", "innerbox");
    box.append(innerbox);
    var product_name = document.createElement("p");
    product_name.setAttribute("id", "product_name");
    product_name.textContent=item.product_n;
    innerbox.append(product_name);
    var product_price = document.createElement("h3");
    product_price.setAttribute("id", "product_price");
    var Discount = Math.floor((item.price * 20) / (100));
    product_price.textContent=(item.price - Discount);

    var span = document.createElement("span");
    span.setAttribute("class", "orignal_price");
    //var s =item.price-100;
    // var afterdis = +(item.price) + 100;
    span.textContent=item.price;
    product_price.append(span)

    var span2 = document.createElement("span");
    span2.setAttribute("id", "percentage_off");
    span2.textContent="22% off";
    product_price.append(span2)



    innerbox.append(product_price);
    var discount = document.createElement("p");
    discount.setAttribute("id", "discount");

    var ita = document.createElement("i");
    ita.setAttribute("class", "fa fa-tags percent");
    discount.append(ita)

    var poff = document.createElement("span");
    poff.textContent=item.discount
    discount.append(poff)

    //discount.textContent=data[i].discount;
    innerbox.append(discount);



    var delivery = document.createElement("p");
    delivery.setAttribute("id", "delivery");
    delivery.textContent="Delivery ₹80";
    innerbox.append(delivery);


        
    })
}

//for(var i=0; i<data.length;i++){
    // var a = document.createElement("a");
    // a.setAttribute("href", "cart1.html");
    // mainDiv.append(a);


    

    // document.querySelectorAll(".box").addEventListener("click",proFun)
//}
// function proFun(){
//     console.log('move to cart')
//     window.location.href="cart1.html"
// }
