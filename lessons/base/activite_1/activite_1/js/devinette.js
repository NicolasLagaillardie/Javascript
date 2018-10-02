/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var aTrouve = false ;
var compteur = 0 ;

while (aTrouve === false){
    var valueUser = Number(prompt("Entre un nombre : ")) ;
    if (valueUser === solution){
        alert(valueUser + " Bravo !") ;
        aTrouve = true ;
    }
    else if (valueUser > solution){
        alert(valueUser + " est trop grand") ;
    }
    else {
        alert(valueUser + " est trop petit") ;
    }
    compteur++ ;
    if (compteur > 5){
        aTrouve = true ;
        alert("Perdu...") ;
    }
}

alert("Nombre d'essais : " + compteur + ". La solution : " + solution) ;