/*
var nombre = Number(prompt("Entrez un nombre :")) ;
if (nombre > 0) {
    console.log(nombre + " est positif") ;
}
else if (nombre === 0) {
    console.log(nombre + " est nul") ;    
}
else {
    console.log(nombre + " est negatif") ;
}

if ((nombre > 0) && (nombre<100)) {
    console.log(nombre + "compris entre 1 et 99") ;
}

if ((nombre <= 0) || (nombre>=100)) {
    console.log(nombre + "non compris entre 1 et 99") ;
}

if (!(nombre <= 0)) {
    console.log(nombre + ">0") ;
}

var jour = prompt("entrez un jour") ;

switch(jour){
    case "Lundi" :
        console.log("Mardi") ;
        break ;
    case "Mardi" :
        console.log("Mercredi") ;
        break ;
    case "Mercredi" :
        console.log("Jeudi") ;
        break ;
    case "Jeudi" :
        console.log("Vendredi") ;
        break ;
    case "Vendredi" :
        console.log("Samedi") ;
        break ;
    case "Samedi" :
        console.log("Dimanche") ;
        break ;
    case "Dimanche" :
        console.log("Lundi") ;
        break ;
    default :
        console.log("Je n'ai pas compris") ;
}
*/

var heure = Number(prompt("heure")) ;
var minute = Number(prompt("minute")) ;
var seconde = Number(prompt("seconde")) ;

if (seconde === 59) {
    if (minute === 59){
        if (heure === 23){
            console.log("Heure suivante : 0h00m00s") ;
        }
        else{
            console.log("Heure suivante : " + (heure + 1) + "h00m00s") ;
        }
    }
    else {
        console.log("Heure suivante : " + heure + "h" + (minute + 1) + "m00s") ;
    }
}
else {
    console.log("Heure suivante : " + heure + "h" + minute + "m" + (seconde + 1) + "s") ;
}