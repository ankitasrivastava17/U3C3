// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount = Number(localStorage.getItem("amount")) || 0;

document.querySelector("#navbar").innerHTML = walletAmount;

var id;

async function searchMovies() {

    try{
        let querry = document.querySelector("#search").value;

        let response = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${querry}`);
        let data = await response.json();
        console.log("data :",data);

        return data.Search;
    }
    catch(error){

        console.log("err :",error);

    }
}

function appendMovies(data) {

    data.forEach(function(elem) {

        var box = document.createElement("div");

        let movies = document.querySelector("#movies");

        let image = document.createElement("img");
        image.src = elem.Poster;

        let p1 = document.createElement("p");
        p1.innerText = elem.Title;

        let btn = document.createElement("button");
        btn.innerText = "Book now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function() {

            if(+(walletAmount)<=0)
              {
                  alert("Insufficient Balance");

              }
              else{
                 let bal = +walletAmount - (+elem.price);
                  localStorage.setItem("amount",+(balance));
                  alert("Booking Successful");

                  purchaseData.push(elem);
                  localStorage.setItem("movie",JSON.stringify(purchaseData));


              }
            window.location.reload();

        })
        box.append(image,p1,btn);
        movies.append(box);

    
    })
}


async function main() {

let data = await searchMovies();
console.log("data here",data);

if(data === undefined) {
    return false;
}

appendMovies(data);

}

function debounce(func,delay) {
    if(id){
        clearInterval(id);
    }

    id = setTimeout(function() {
        func();
    },delay);

}


// {Title: "Some Mothers Do 'Ave 'Em", Year: '1973–1978', imdbID: 'tt0069634', Type: 'series', Poster: 'https://m