/* 
Activité : gestion des contacts
*/

// Création de l'objet Contact
var Contact = {
	init: function(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	},

	view: function() {
		var description = "Nom : " + this.lastname + ", prénom : " + this.firstname;
		return description;
	}
}

// Création du contact n°1
var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");

// Création du contact n°2
var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");

// Création du tableau d'objets Contact
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// Fonction pour lister les contacts
function listContact(contacts) {
	console.log("Voici la liste de tous vos contacts :");
	contacts.forEach(function (contact){
		console.log(contact.view());
	})
}

// Fonction pour créer un contact
function createContact() {
	var firstname = prompt("Entrez le prénom de votre contact :");
	var lastname = prompt("Entrez le nom de votre contact :");
	contact = Object.create(Contact);
	contact.init(firstname, lastname);
	contacts.push(contact);
	console.log("Le nouveau contact a bien été ajouté !");
}

// Gestion des choix de l'utilisateur
var choice = "";
while (choice !== 0) {
	console.log("Bienvenue dans le gestionnaire des contacts ! \n1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
	choice = Number(prompt("Entrez votre choix :"));

	switch (choice) {
	case 1:
		listContact(contacts);
		break;
	case 2:
		createContact();
		break;
	case 0:
		console.log("A bientôt !");
		break;
	default:
		console.log("Veuillez saisir un des choix disponibles.");
	}
}
