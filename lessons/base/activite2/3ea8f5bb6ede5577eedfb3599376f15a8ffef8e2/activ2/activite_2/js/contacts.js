/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var choix=1;

var contacts = [];

var contact = {
		init: function(nom, prenom){
			this.nom = nom;
			this.prenom = prenom;
		},

		decrire: function(){
			var description = "Nom : " +this.nom+", "+" Prenom: " +this.prenom;
			return description;
		}
	}
/* ################### créer et ajouter un contact ################# */

	var contact1 = Object.create(contact);
	contact1.init("Lévisse", "Carole");

	var contact2 = Object.create(contact);
	contact2.init("Mélodie","Nelsonne")
	
	contacts.push(contact1);
	contacts.push(contact2);

/* ############################ La boucle ########################## */

while(choix!=0){
	choix = prompt("entre votre choix:");
	console.log("1: lister les contacts\n2: Ajouterun contact \n3: Quitter")

	if(choix == 1){
		contacts.forEach(function(contact){
			console.log(contact.decrire());
		});
	}else if(choix == 2){
		
		var ajContactNom = prompt("entre le nom du nouveau contact");
		var ajContactPrenom = prompt("entre le prénom du nouveau contact");

		var contactAjouter = Object.create(contact);
		contactAjouter.init(ajContactNom,ajContactPrenom)
		contacts.push(contactAjouter)
		//i++;
		console.log("Le nouvea contact a été ajouté. ")
		
	}
	
}