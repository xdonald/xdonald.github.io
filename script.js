//DATA aktualna:
var FullDate = new Date();
var dzien = FullDate.getDate();
var mies = FullDate.getMonth()+1;
var rok = FullDate.getFullYear();

var zero = new Array();
zero[1] = "01";
zero[2] = "02";
zero[3] = "03";
zero[4] = "04";
zero[5] = "05";
zero[6] = "06";
zero[7] = "07";
zero[8] = "08";
zero[9] = "09";

if(dzien<=9){
    var dzien = zero[dzien]; 
}
if(mies<=9){
    var mies = zero[mies]; 
}


document.getElementsByClassName("datee__dzis")[0].innerHTML = "(" + dzien +"."+mies+")";
sessionStorage.setItem("Vdzien", dzien);
sessionStorage.setItem("Vmies", mies);
sessionStorage.setItem("Vrok", rok);



document.addEventListener("click", (event) => {
    let food = event.target.dataset.food;
    if (food) {
        console.log(food);
        sessionStorage.setItem("Vfood", food);
    }
})

document.addEventListener("click", (event) => {
    let date = event.target.dataset.date;
    if (date) {
        console.log(date);
        sessionStorage.setItem("Vdate", date);
    }
})


document.addEventListener("click", (event) => {
    let wsparcie = event.target.dataset.wsparcie;
    if (wsparcie) {
        console.log(wsparcie);
        sessionStorage.setItem("Vwsparcie", wsparcie);
    }
})