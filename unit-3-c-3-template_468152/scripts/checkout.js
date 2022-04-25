// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let walletAmount = Number(localStorage.getItem("amount")) || 0;

document.querySelector("#navbar").innerHTML = walletAmount;

let purchaseData = JSON.parse(localStorage.getItem("movie")) || [];
let checkout_div = document.getElementById("movie");

console.log(purchaseData);
checkoutData(purchaseData);

function checkoutData(data) {

data.forEach(function(elem) {

    let div1 = document.createElement("div");
    
    let image = document.createElement("img");
    image.src = elem.Poster;

    let p1 = document.createElement("p");
    p1.innerText = elem.Title;

    div1.append(image,p1);

    checkout_div.append(div1);


})

}

