/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contact = {
   

     init: function(prenom,nom)
     {
         this.nom=nom;
         this.prenom= prenom;
         
     },


     afficher: function () {

        var affichage = "le contact "+ this.prenom + " " + this.nom + " a été crée" ;

            

        return affichage;

    }
};
var contacts =[];

console.log("choix possible");
console.log("0: quitter")
console.log("1: creer contact")
console.log("2: afficher les contacts")

var choix;
while( choix != 1  || choix != 2 )
{

    choix = prompt("choisissez une option");

    switch (choix) {
    
       case "0":
    
        
            alert("ciao");
        
           break;
        
       case "1":
    
        prenom = prompt("entrez un prenom");
        nom = prompt("entrez un nom");
        newContact = Object.create(contact)
        newContact.prenom = prenom
        newContact.nom = nom
        console.log("contact creé "+ newContact.prenom + " "+ newContact.nom)
    contacts.push(newContact)
    break;
       case "2":

     console.log("la liste des contacts :")
        for(var i=0; i < contacts.length; i++)
        {
            console.log(contacts[i]);
        }
    
    default:
    
    }

}
console.log("votre choix n'est pas bon")




