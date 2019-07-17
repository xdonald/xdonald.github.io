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


//RADNOM KEY

//add img and key section