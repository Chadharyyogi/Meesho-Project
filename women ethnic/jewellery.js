var data = JSON.parse(localStorage.getItem("Jewellery")) || [
    {
        image_url:"https://images.meesho.com/images/products/79816711/sk6ds_512.jpg",
        product_n:"Designer Party Wear Long Back Earrings Set for Women and Girls",
        price:190,
        discount:"₹34 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/89349647/dhxr0_512.jpg",
        product_n:"Bracelet & Bangles",
        price:296,
        discount:"₹40 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/64773636/5z4iz_512.jpg",
        product_n:"Silver Couple Ring Set",
        price:194,
        discount:" ₹25 discount on 1st order",
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
h2.textContent="Jewellery & Accessories";
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
        // console.log(item)
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



