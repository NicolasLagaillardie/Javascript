var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2


var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie,  " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());









var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }
    
};
    
var crokdur = Object.create(Chien);
crokdur.init("Crokdur",  "mâtin de Naples",  75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
crokdur.aboyer = function () {
    return "ouaf";
};

console.log("Tiens,  un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce",  "bichon",  22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
pupuce.aboyer = function () {
    return "Kai !";
};
console.log("Tiens,  un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());


