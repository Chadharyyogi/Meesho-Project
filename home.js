 //var product_search = document.querySelector("#head_search_input").value;
 document.querySelector("#head_search_button").addEventListener("click",sFun)
 function sFun(){
     console.log(document.querySelector("#head_search_input").value)
     if(document.querySelector("#head_search_input").value== "shoes" || document.querySelector("#head_search_input").value== "adidas" || document.querySelector("#head_search_input").value== "nike" || document.querySelector("#head_search_input").value== "shose" || document.querySelector("#head_search_input").value== "boots" || document.querySelector("#head_search_input").value== "joote"){
         console.log("search")
         window.location.href="allshoes.html"
     }
     else if(document.querySelector("#head_search_input").value== "cloths" || document.querySelector("#head_search_input").value== "t shirt" || document.querySelector("#head_search_input").value== "shirt" || document.querySelector("#head_search_input").value== "trouser" || document.querySelector("#head_search_input").value== "jecket"){
         console.log("search")
         window.location.href="cloths.html"
     }
     else if(document.querySelector("#head_search_input").value== "ring" || document.querySelector("#head_search_input").value== "bangles" || document.querySelector("#head_search_input").value== "neck less" || document.querySelector("#head_search_input").value== "jewellery" || document.querySelector("#head_search_input").value== "jwellary"){
         console.log("search")
         window.location.href="jewellery.html"
     }
     else{
         alert("search only given word")
     }
 }

