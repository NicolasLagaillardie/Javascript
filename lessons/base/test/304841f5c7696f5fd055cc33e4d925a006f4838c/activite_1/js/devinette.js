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

// C'est là que commence le génie ! (en toute modestie)
var reponse = 0;
var nbRep = 0;
while ((reponse !== solution) && (nbRep < 6)) {
    reponse=Number(prompt("Donner un nombre entre 0 et 100"));
    nbRep++;
    if (reponse < solution) {
        console.log(String(reponse)+" est trop petit");
    }
    else if (reponse > solution) {
        console.log(reponse + " est trop grand");
    }
    else {
        console.log("Bravo ! La solution est " + reponse);
    }
}

if (reponse !== solution) {
    console.log("Perdu... La solution était " + solution);
}
else {
    console.log("Vous avez trouvé en " + nbRep + " essai(s)");
}