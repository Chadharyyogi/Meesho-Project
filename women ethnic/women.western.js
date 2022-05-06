var data = JSON.parse(localStorage.getItem("Allshoes")) || [
    {
        image_url: "https://images.meesho.com/images/products/41596349/tayws_512.jpg",
        product_n: "Comfy Graceful Women Jumpsuits",
        price: 276,
        discount: "₹39 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/12096538/23a06_512.jpg",
        product_n: "trendy Fancy Rayon Women's Palazzos combo 2pes",
        price: 366,
        discount: "₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/2087003/1_512.jpg",
        product_n: "Fancy Women's Satin Night Dress",
        price: 272,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/60675448/edo9x_512.jpg",
        product_n: "Mid di",
        price: 357,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/61995304/mulod_512.jpg",
        product_n: "Women dress",
        price: 273,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/99377645/c7oqn_512.jpg",
        product_n: "Stylish Feminine Women Dresses",
        price: 354,
        discount: " ₹30 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/77575299/yoc9h_512.jpg",
        product_n: "DRESSSES",
        price: 398,
        discount: " ₹35 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/35761828/tkwot_512.jpg",
        product_n: "OVIDA Women's Satin Solid Maxi Nighty Top And Pajam With Robe, (Royal Blue)",
        price: 418,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/75380554/afcp2_512.jpg",
        product_n: "INDIAN NATURES-WOMEN'S BOTTOM WEAR- COTTON SHORTS FOR WOMEN_2COMBO",
        price: 282,
        discount: " ₹39 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/61388843/biyby_512.jpg",
        product_n: "Stylish Combo Shorts for Women",
        price: 303,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/48168569/lyvi7_512.jpg",
        product_n: "Ravishing Fabulous Women Shorts",
        price: 378,
        discount: " ₹39 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/85854424/kofxx_512.jpg",
        product_n: "Combo Mirror Palazzos",
        price: 510,
        discount: " ₹45 discount on 1st order",
    },
];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if (selected == "high") {
        data = data.sort(function (a, b) {

            return b.price - a.price;
        });
    }
    else if (selected == "low") {
        data = data.sort(function (a, b) {
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
h2.textContent = "Top Wear/Bottom Wear/Innerwear/Sleepwear";
startdiv.append(h2);
var para = document.createElement("p");
para.textContent = "Showing 1-16 out of 100";
startdiv.append(para);
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");
body.append(mainDiv);

displayItem(data);
function displayItem(data) {
    document.querySelector("#container").innerHTML = "";
    data.map(function (item) {
        var box = document.createElement("div");
        box.setAttribute("class", "box");

        box.addEventListener("click", function () {
            // addToCart1(item)
            localStorage.setItem("cartItem", JSON.stringify(item))
            window.location.href = "meesho_productDetail.html"
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
        product_name.textContent = item.product_n;
        innerbox.append(product_name);
        var product_price = document.createElement("h3");
        product_price.setAttribute("id", "product_price");
        var Discount = Math.floor((item.price * 20) / (100));
        product_price.textContent = (item.price - Discount);

        var span = document.createElement("span");
        span.setAttribute("class", "orignal_price");
        //var s =item.price-100;
        // var afterdis = +(item.price) + 100;
        span.textContent = item.price;
        product_price.append(span)

        var span2 = document.createElement("span");
        span2.setAttribute("id", "percentage_off");
        span2.textContent = "20% off";
        product_price.append(span2)



        innerbox.append(product_price);
        var discount = document.createElement("p");
        discount.setAttribute("id", "discount");

        var ita = document.createElement("i");
        ita.setAttribute("class", "fa fa-tags percent");
        discount.append(ita)

        var poff = document.createElement("span");
        poff.textContent = item.discount
        discount.append(poff)

        //discount.textContent=data[i].discount;
        innerbox.append(discount);



        var delivery = document.createElement("p");
        delivery.setAttribute("id", "delivery");
        delivery.textContent = "Delivery ₹80";
        innerbox.append(delivery);

    })
}



