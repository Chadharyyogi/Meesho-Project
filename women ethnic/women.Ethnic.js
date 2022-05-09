var data = JSON.parse(localStorage.getItem("AllCloth")) || [
    {
        image_url: "https://images.meesho.com/images/products/51831230/uhxaq_512.jpg",
        product_n: "Charvi Pretty Sarees",
        price: 587,
        discount: "₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/49781151/monod_512.jpg",
        product_n: "Women Rayon printed blue Long Kurti",
        price: 501,
        discount: "₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/73810131/mbozq_512.jpg",
        product_n: "Trendy Attractive gown",
        price: 567,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/17325771/f7461_512.jpg",
        product_n: "Vimalnath Synthetics Printed Bhagalpuri Saree",
        price: 418,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/6536226/4db6c_512.jpg",
        product_n: "Classy Women Saree",
        price: 551,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/62869648/bgju9_512.jpg",
        product_n: "Shree Krishna Handicrafts Stylish Women's Cotton Saree With Blouse",
        price: 573,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/97947179/cpxp0_512.jpg",
        product_n: "Net Saree With Butterfly Accent",
        price: 373,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/42353132/cpeda_512.jpg",
        product_n: "Jivika Superior Women Kurta Sets",
        price: 350,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/101940010/wnjxx_512.jpg",
        product_n: "NEW PRINTED KURTA SET",
        price: 663,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/82210069/m8qdz_512.jpg",
        product_n: "Designer Russel Dupatta",
        price: 149,
        discount: " ₹30 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/56722/1_512.jpg",
        product_n: "Charming Colorful Pure Chiffon Dupatta",
        price: 222,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/92597110/xsv1f_512.jpg",
        product_n: "ASSORTED COLORS CHIFFON MOTI DUPATTA PACK OF 10",
        price: 425,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/12212735/6ed4b_512.jpg",
        product_n: "Banita Fabulous Salwar Suits & Dress Materials",
        price: 541,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/82615826/qrnxo_512.jpg",
        product_n: "SUPERIOR SALWAR SUIT & DRESS MATERIAL",
        price: 249,
        discount: " ₹37 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/98760745/ep75n_512.jpg",
        product_n: "MDC TRENDY WOMEN SUIT MATERIAL",
        price: 334,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/13570476/f9282_512.jpg",
        product_n: "Alisha Voguish Salwar Suits & Dress Materials",
        price: 653,
        discount: " ₹50 discount on 1st order",
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
h2.textContent = "Sarees/kurtis/Other Ethnic";
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
            window.location.href = "meesho_productDetail.html";
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
        span2.textContent = "22% off";
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


