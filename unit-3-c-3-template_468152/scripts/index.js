// Store the wallet amount to your local storage with key "amount"




let walletAmount= Number(localStorage.getItem("wallet"))||0;
function addAmount(){
    let amount= document.querySelector("#amount").value; 

    if(Number(amount)>0)
    {
       walletAmount+=Number(amount);
       localStorage.setItem("amount",Number(walletAmount));
    }


}