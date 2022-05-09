var data = JSON.parse(localStorage.getItem("allproduct")) || [
    {
        image_url: "https://images.meesho.com/images/products/41933564/rf0wl_512.jpg",
        product_n: "Unique Fashionable Men Sports Shoes",
        price: "350",
        discount: "₹47 discount on 1st orde",
    },
    {
        image_url: "https://images.meesho.com/images/products/31808852/a2faf_512.jpg",
        product_n: "Urbane Men Ethnic Jackets",
        price: "490",
        discount: "₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/67025080/bsxsr_512.jpg",
        product_n: "Mens cotton vest combo piece of 5",
        price: "422",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.bJ-AVxezy7I-mmDzdNiTRwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7",
        product_n: "Mens Jean",
        price: "790",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://www.bing.com/th?id=OP.am63QqZ171yq4A474C474&o=5&pid=21.1&w=128&h=128&qlt=100&dpr=1&bw=6&bc=FFFFFF&c=17",
        product_n: "Mens Cargo Pant",
        price: "670",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://www.bing.com/th?id=OP.%2fwMzwKeS95g%2fjA474C474&w=120&h=120&c=17&o=5&pid=21.1",
        product_n: "Legendary Men's Shirt",
        price: "780",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.X1uLojT1e4q1TAaq9Br3QwHaNK?w=185&h=329&c=7&r=0&o=5&pid=1.7",
        product_n: "Men's Casual T'Shirt",
        price: "350",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.a3E_6tAlKxtdvstsl9ovEQHaMi?w=185&h=313&c=7&r=0&o=5&pid=1.7",
        product_n: "Men's Jacket",
        price: "1450",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.nCVLunKMgGHFQ79gUtc5aQHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
        product_n: "Mens Muffler",
        price: "170",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.2jEEPHRL9_Twfm1FjH4vUAHaJ3?w=185&h=247&c=7&r=0&o=5&pid=1.7",
        product_n: "Legendary Men's Suit",
        price: "4400",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.06QZPDlV1dJi1XkTBmrm-gHaLp?w=185&h=291&c=7&r=0&o=5&pid=1.7",
        product_n: "Men's Casual Sweater",
        price: "650",
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://m.media-amazon.com/images/I/71szqCoFfYL._AC_UX466_.jpg",
        product_n: "Men's Hoodie",
        price: "850",
        discount: " ₹50 discount on 1st order",
    }

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

    console.log("x", data);
    displayItem(data);
}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent = " All Men Accessories";
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

            localStorage.setItem("cartItem", JSON.stringify(item))
            window.location.href = "/Meesho-Project/meesho_productDetail.html"

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

        innerbox.append(discount);



        var delivery = document.createElement("p");
        delivery.setAttribute("id", "delivery");
        delivery.textContent = "Delivery ₹80";
        innerbox.append(delivery);



    })
}



