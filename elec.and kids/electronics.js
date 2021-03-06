var data = JSON.parse(localStorage.getItem("Jewellery")) || [
    {

        image_url: "https://images.meesho.com/images/products/65363405/6fajy_512.jpg",
        product_n: "Every Day Cable",
        price: 201,
        discount: "₹35 discount on 1st order",

        image_url: "https://images.meesho.com/images/products/65363405/6fajy_512.jpg",
        product_n: "Every Day Cable",
        price: 201,
        discount: "₹40 discount on 1st order",

    },
    {
        image_url: "https://images.meesho.com/images/products/63772246/eyyet_512.jpg",
        product_n: "OPPO a55 cases and covers",
        price: 160,
        discount: "₹28 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/2381342/dadc5_512.jpg",
        product_n: "Elite Unique new Iron Box",
        price: 498,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/69707699/t2xcw_512.jpg",
        product_n: "Printopolis Designer Back Cover for Mi Redmi Y1",
        price: 145,
        discount: " ₹25 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/69261398/kffly_512.jpg",
        product_n: "Cases & Covers",
        price: 176,
        discount: " ₹30 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/24570059/d42c4_512.jpg",
        product_n: "Modern Table Lamps",
        price: 260,
        discount: " ₹45 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/94659430/9wpph_512.jpg",
        product_n: "BLUEMIX STAR 4 JAR MIXER GRINDER WITH HIGH PERFORMANCE MOTOR 24 MONTH LIMITED WARRANTY",
        price: 1600,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/82117388/1jbp9_512.jpg",
        product_n: "Amazing Portable Electric Charging Fan(Multicolor)",
        price: 777,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/34204265/5w2jy_512.jpg",
        product_n: "Fancy Mobile Holders",
        price: 132,
        discount: " ₹25 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/21374937/69e02_512.jpg",
        product_n: "Fancy cool product",
        price: 1167,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/100293445/b2jvv_512.jpg",
        product_n: "HUG PUPPY Bluetooth ID116 ATQ Wireless Smart Fitness Watch ",
        price: 412,
        discount: " ₹50 discount on 1st order",
    },
    {
        image_url: "https://images.meesho.com/images/products/27738176/7cafc_512.jpg",
        product_n: "Jprindm Mobile Back Cover for Realme 5 / 5s / 5i / Narzo 10",
        price: 182,
        discount: " ₹30 discount on 1st order",
    },

];
function SearchByPrice() {
    var selected = document.getElementById("Sort_by_price").value;
    console.log("selected: ", selected);
    if (selected == "high") {
        data = data.sort(function (a, b) {
            console.log("x1", data);
            return b.price - a.price;
        });
    }
    else if (selected == "low") {
        data = data.sort(function (a, b) {
            return a.price - b.price;
        });
    }


    console.log("x", data);


    console.log("x", data);
    displayItem(data);

}

var body = document.querySelector("body");
var startdiv = document.createElement("div");
startdiv.setAttribute("id", "startdiv");
body.append(startdiv);
var h2 = document.createElement("h2");
h2.textContent = "Mobile Accessories/Appliances";
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

