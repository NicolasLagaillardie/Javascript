function direBonjour() {
    console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

function direBonjour2() {
    return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour2();
console.log(resultat);
console.log("Fin du programme");


console.log("Fin du programme".length);
console.log("Fin du programme".toUpperCase());
console.log("Fin du programme".toLowerCase());
console.log("Fin du programme".charAt(5));
console.log("Fin du programme"[5]);


var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());



var perso2 = {
    nom: "test" ,
    sante: 50 ,
    force: 200 ,
    xp:  25 ,
    
    decrire : function(){
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force et " + this.xp + " d'xp";
        return description;
    }
}

console.log(perso2.decrire());

// Aurora est blessée par une flèche
perso2.sante = perso2.sante - 20;

// Aurora trouve un bracelet de force
perso2.force = perso2.force + 10;

// Aurora apprend une nouvelle compétence
perso2.xp = perso2.xp + 15;

console.log(perso2.decrire());



var chien = {} ;

chien.aboyer = function(){
    return "ouaf" ;
} ;

chien.nom = "coco" ;
chien.taille = 50 ;
chien.race = "golden retriever" ;

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());



var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {} ;

cercle.perimetre = function(r){
    return 2 * 3.14 * r ;
}
cercle.aire = function(r){
    return 3.14 * r * r ;
}

console.log("Son périmètre vaut " + cercle.perimetre(r));
console.log("Son aire vaut " + cercle.aire(r));