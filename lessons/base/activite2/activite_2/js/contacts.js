//déclaration de l'objet
var contact = {
    init: function (prenom, nom) {
        this.nom = nom ;
        this.prenom = prenom ;
    },
    
    decrire: function (numero) {
        return "le contact " + numero + " s'appelle : " + this.prenom + " " + this.nom ;
    }
};

//déclaration des variables pour la boucle
var quitter = "" ;
var afficher ;
var ajouter ;
var i ;

//déclaration des variables pour ajouter un contact
var ajouterNom ;
var ajouterPrenom ;
var ajouterContact = Object.create(contact);

//déclaration et ajout des premiers contacts
var contact1 = Object.create(contact) ;
var contact2 = Object.create(contact) ;

contact1.init("Carole", "Lévisse") ;
contact2.init("Mélodie", "Nelsonne") ;

var contacts = [] ;
contacts.push(contact1) ;
contacts.push(contact2) ;

//boucle principale
while (quitter !== "oui") {
    
    //affichage de tous les contacts
    afficher = prompt("Voulez-vous afficher les contact ? (oui/non)").toLowerCase() ;
    
    if (afficher === "oui") {
        alert("Voici les contacts")
        for(i = 0 ; i < contacts.length ; i++){
            alert(contacts[i].decrire(i)) ;
        } ;
    };
    
    //ajout d'un contact
    ajouter = prompt("Voulez-vous ajouter un contact ? (oui/non)").toLowerCase() ;
    
    if (ajouter === "oui") {
        ajouterNom = prompt("Nom du contact ?") ;
        ajouterPrenom = prompt("Nom du contact ?") ;
        ajouterContact.init(ajouterPrenom, ajouterNom);
        contacts.push(ajouterContact) ;
        alert("Contact ajouté") ;
    };
    
    quitter = prompt("Voulez-vous quitter ? (oui/non)").toLowerCase() ;
};