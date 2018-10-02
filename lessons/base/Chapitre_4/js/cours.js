/*
console.log("debut") ;

var nombre = 1 ;
while (nombre <= 5){
    console.log(nombre) ;
    nombre++ ;
}
console.log("fin");

var compteur ;

for (compteur = 1 ; compteur <= 5 ; compteur++){
    console.log(compteur) ;
}



for (var compteur = 1 ; compteur <= 5 ; compteur++){
    console.log(compteur) ;
}
*/

var tour = Number(prompt("Nombre de tours")) ;

for (var compteur = 1 ; compteur <= tour ; compteur++){
    console.log("tour num : " + compteur) ;
}

var start = Number(prompt("start")) ;
for (var i = start; i <= 10+start; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
    else {
        console.log(i + " est impair");
    }
}