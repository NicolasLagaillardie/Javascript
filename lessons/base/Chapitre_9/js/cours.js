var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(function (film) {
    console.log(film);
});


films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"


function mousquetaire() {
    var mousquetaires = ["Arthos", "Porthos", "Aramis"];
    
    var i;
    
    for (i = 0 ; i < mousquetaires.length ; i++){
        console.log(mousquetaires[i]) ;
    };

    mousquetaires.push("Artagnan ") ;

    mousquetaires.forEach(function(membre){
        console.log(membre) ;  
    }) ;
} ;

mousquetaire() ;

function somme() {
    var valeurs = [11, 3, 7, 2, 9, 10];
    
    var resultat = 0 ;
    
    valeurs.forEach(function (nombre){
        resultat += nombre ;
    }) ;
    
    return resultat ;
};

console.log(somme()) ;

function maximum() {
    var valeurs = [11, 3, 7, 2, 9, 10];
    
    var resultat = valeurs[0] ;
    
    valeurs.forEach(function (nombre){
        if (resultat < nombre){
            resultat = nombre ;
        };
    }) ;
    
    return resultat ;
};

console.log(maximum()) ;


function mots() {
    var motsSaisis = [];
    
    var toAdd = prompt("Saisie ? ") ;
    motsSaisis.push(toAdd) ;
    
    while (toAdd.toLowerCase() != "stop"){
        toAdd = prompt("Saisie ? ") ;
        motsSaisis.push(toAdd) ;
    } ;
    
    motsSaisis.forEach(function (mot){
        console.log(mot) ;
    })
};

//mots() ;


var Film = {
    init: function(titre, anneeSortie, rea){
        this.titre = titre ;
        this.anneeSortie = anneeSortie ;
        this.rea = rea ;
    },
    
    decrire: function(){
        return this.titre + " (" + this.anneeSortie + ", " + this.rea + ")" ;
    }
}

var tableauFilms =[] ;

var film1 = Object.create(Film) ;
film1.init("coco", "1934", "Gege") ;

tableauFilms.push(film1) ;

tableauFilms.forEach(function (film){
    console.log(film.decrire()) ;
}) ;


var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var Chenils =[] ;
var chien1 = Object.create(Chien) ;
chien1.init("gege" , "chien", 20) ;
var chien2 = Object.create(Chien) ;
chien2.init("gege2" , "chien", 40) ;
var chien3 = Object.create(Chien) ;
chien3.init("gege3" , "chien", 70) ;

Chenils.push(chien1) ;
Chenils.push(chien2) ;
Chenils.push(chien3) ;

Chenils.forEach(function (iench){
    console.log(iench.aboyer()) ;
}) ;