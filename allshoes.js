var data = JSON.parse(localStorage.getItem("AllShoes")) || [
    {
        image_url:"https://images.meesho.com/images/products/27643899/ureqp_512.jpg",
        product_n:"ADZON MENS SAFETY SHOES WITH STEEL TOE",
        price:"910",
        discount:"₹50 discount on 1st orde",
    },
    {
        image_url:"https://images.meesho.com/images/products/77351565/jpbnx_512.jpg",
        product_n:"Laser Cutting Flats",
        price:"257",
        discount:"₹34 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/99885528/n04gd_512.jpg",
        product_n:"New Women Women Duffel Bags",
        price:"388",
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/98910664/o7eff_512.jpg",
        product_n:"Uniq Trendy Men Sports Shoes",
        price:"300",
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/23507720/0752b_512.jpg",
        product_n:"Abada Fabulous Men Sports Shoes",
        price:"436",
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/67917688/iulgn_512.jpg",
        product_n:"Morder Fabulous Men Sports Shoes",
        price:"396",
        discount:" ₹50 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/48511147/arlyw_512.jpg",
        product_n:"Abada Graceful Men Sports Shoes",
        price:"429",
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/104082467/p25as_512.jpg",
        product_n:"Gorgues Women Jutis.",
        price:"144",
        discount:" ₹20 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/41335194/l38gn_512.jpg",
        product_n:"Styles Trendy Men Wallets",
        price:"144",
        discount:" ₹25 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/10837931/82554_512.jpg",
        product_n:"FashionableTrendy Men Wallets",
        price:"190",
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/98519352/dmfn9_512.jpg",
        product_n:"FashionableTrendy Men Wallets",
        price:"229",
        discount:" ₹30 discount on 1st order",
    },
    {
        image_url:"https://images.meesho.com/images/products/44450754/pcmng_512.jpg",
        product_n:"fashionanleTrendy Men Wallets",
        price:"308",
        discount:" ₹40 discount on 1st order",
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
h2.textContent="Men/Women footwear and Bags";
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