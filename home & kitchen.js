var data = JSON.parse(localStorage.getItem("Jewellery")) || [
    {
        image_url:"https://images.meesho.com/images/products/8132640/85456_512.jpg",
        product_n:"Tv Set Up Box stand",
        price:468,
        discount:"₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/8592007/a8f06_512.jpg",
        product_n:"Latest Lunch Box",
        price:293,
        discount:"₹35 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/4266464/1_512.jpg",
        product_n:"Attractive Water Bottle",
        price:450,
        discount:" ₹25 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/3600247/1_512.jpg",
        product_n:"Trendy Velvet Printed ",
        price:468,
        discount:"₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/7691630/8e390_512.jpg",
        product_n:"stylis cotton 75 X 54..",
        price:393,
        discount:"₹35 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/3600800/1_512.jpg",
        product_n:"Fancy Stylish Velvet Printed Badsheet",
        price:410,
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/3600163/1_512.jpg",
        product_n:"Comphy Stylish Velvet Printed Badsheet",
        price:422,
        discount:"₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/31113222/4a54d_512.jpg",
        product_n:"SHOW PIECE",
        price:203,
        discount:"₹35 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/22981840/2aa91_512.jpg",
        product_n:"Classic Unisex Decor",
        price:350,
        discount:" ₹25 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/35665245/1uxyz_512.jpg",
        product_n:"home decor",
        price:403,
        discount:"₹35 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/24639995/08ec2_512.jpg",
        product_n:"Fabulous Dream Catchers",
        price:329,
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/9543018/b5a29_512.jpg",
        product_n:"Essential lunch Boxes",
        price:310,
        discount:" ₹50 discount on 1st order",
    },
];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if(selected == "high") {
        data = data.sort(function (a, b){
            console.log("x1",data);
            return b.price - a.price;
        });
    }
    else if(selected == "low") {
        data = data.sort(function (a, b){
            return a.price - b.price;
        });
    }
    
    console.log("x",data);
}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent="Home Furnishing/Decor/kitchen Dining";
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
   
    span.textContent=item.price;
    product_price.append(span)

    var span2 = document.createElement("span");
    span2.setAttribute("id", "percentage_off");
    span2.textContent="20% off";
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