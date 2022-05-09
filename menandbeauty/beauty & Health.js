var data = JSON.parse(localStorage.getItem("AllCloth")) || [
    {
        image_url: "https://images.meesho.com/images/products/42297237/cxm2o_512.jpg",
        product_n: "Salicylic Acid Ice Cream Mask Acne Moisturizing Smear Mask 120ML Pack Of 4",
        price: 273,
        discount: "₹40 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/10278011/89157_512.jpg",
        product_n: "Nano Mist Sanitizer",
        price: 162,
        discount: "₹15 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/1488567/1_512.jpg",
        product_n: "Extra Care Orange Maxi XXL",
        price: 259,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://th.bing.com/th/id/OIP.zwEvL_jNVRajQqv-cq8XHQHaFL?w=228&h=180&c=7&r=0&o=5&pid=1.7",
        product_n: "Women's Health- Daily Vitamin Pack | Mongolian Store",
        price: 259,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://www.bing.com/th?id=OP.C9KrDfGIMBlCMQ474C474&w=108&h=108&c=17&o=5&bw=6&bc=ffffff&pid=21.1",
        product_n: "Herbal Essences Shine collection",
        price: 373,
        discount: "₹40 discount on 1st order",
    },
    {
        image_url: "https://www.bing.com/th?id=OP.2akda9IRdmta5w474C474&o=5&pid=21.1&w=128&h=128&qlt=100&dpr=1&bw=6&bc=FFFFFF&c=17",
        product_n: "Biotin Shampoo",
        price: 162,
        discount: "₹15 discount on 1st order",
    },
    {
        image_url: "https://m.media-amazon.com/images/I/71VnWb+xsIL._SX522_.jpg",
        product_n: "Meaningful Beauty Anti-Aging Daily Skincare System with Crème de Serum",
        price: 1200,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://m.media-amazon.com/images/I/61PtavqaOeL._SX425_.jpg",
        product_n: "Hydration Oasis Refreshing Gel Moisturizer by H2O+",
        price: 759,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://m.media-amazon.com/images/I/71uwqbsjOzL._SX425_.jpg",
        product_n: "L'Oreal Paris Revitalift Hyaluronic Acid + Caffeine Hydrating Eye Serum with Anti-Aging Moisturizer Sample",
        price: 1500,
        discount: "₹40 discount on 1st order",
    },
    {
        image_url: "https://m.media-amazon.com/images/I/71N3y6keU9L._SX425_.jpg",
        product_n: "Olay Age Defying Classic Eye Gel, 0.5 oz Packaging may Vary",
        price: 660,
        discount: "₹15 discount on 1st order",
    },
    {
        image_url: "https://i.pinimg.com/originals/43/90/fa/4390fabb729191fb2cb449912cd1d581.jpg",
        product_n: "CeraVe Aging and wrinkle cream",
        price: 1200,
        discount: " ₹40 discount on 1st order",
    },
    {
        image_url: "https://i.pinimg.com/originals/43/90/fa/4390fabb729191fb2cb449912cd1d581.jpg",
        product_n: "Best Wrinkle cream set",
        price: 1450,
        discount: " ₹40 discount on 1st order",
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
h2.textContent = "MakeUp/wellness/skin Care";
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

        innerbox.append(discount);



        var delivery = document.createElement("p");
        delivery.setAttribute("id", "delivery");
        delivery.textContent = "Delivery ₹80";
        innerbox.append(delivery);



    })
}

