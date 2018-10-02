var CompteBancaire = {
    initCB: function (nom, montant) {
        this.nom = nom;
        this.montant = montant;
    },
    
    decrire: function () {
        var description = "le propriétaire de ce compte est " + this.nom + ". Il y a " + this.montant + " euros sur le compte";
        return description;
    },
    
    debiter: function (montant) {
        this.montant -= montant;
    },
    
    crediter: function (montant) {
        this.montant += montant;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.montant * this.tauxInteret;
    this.solde += interets;
};


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());


var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films[0]); // Affiche "Le loup de Wall Street"
console.log(films[1]); // Affiche "Vice-Versa"
console.log(films[2]); // Affiche "Babysitting"
