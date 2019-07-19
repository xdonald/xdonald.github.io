//DATA
var fulldata = new Date();
var opcjeTr = {day: '2-digit' , month: '2-digit', year: 'numeric'};
var opcjeGm = {day: '2-digit' , month: '2-digit'};
var SesjaData = sessionStorage.getItem('Vdate');

fulldata.setDate(fulldata.getDate() - SesjaData);
console.log(SesjaData);
var dataGm = fulldata.toLocaleString("pl-PL", opcjeGm);
var dataTr = fulldata.toLocaleString("fr-FR", opcjeTr);

document.getElementsByClassName("nadawca__dzien")[0].innerHTML = dataGm;
document.getElementsByClassName("data__kupon")[0].innerHTML = dataTr;



//IMG
var SesjaFood = sessionStorage.getItem('Vfood');
document.getElementsByClassName("kuponIMG")[0].src = "img/"+SesjaFood+".png";



//RADNOM KEY
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

document.getElementsByClassName("kuponKOD")[0].innerHTML = makeid(1)+"-"+makeid(2)+"-"+makeid(2)+"-"+makeid(1);
//add img and key section