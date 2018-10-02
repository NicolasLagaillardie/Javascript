/* 
 Activit√© : jeu de devinette
 */

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");
console.log("Vous devez deviner le nombre comprix entre 0 et 100 choisie par l'ordinateur");

// Cette ligne g√©n√®re al√©atoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
console.log("(La solution est " + solution + ")");
/**
 * 
 * @type Number
 * nombreDeTour affiche le nombre de foix que l'utilisateur a fait des entrÈ
 */
var nombreDeTour = 0;
/**
 * 
 * @type Boolean
 * isfind est une variable signalant si le joueur a trouvÈ le nombre
 * il est initiatilsÈ a false
 */
var isfind = false;
/**
 * boucle de controle
 * elle s'execute tand que le nombre n'est pas trouvÈ et que le nombre de tour ne noit pas superieur a 6
 */
while (!isfind === true && nombreDeTour<=6)
{
    /**
     * 
     * @type type
     * resultat brute de la saisie
     */
    var saisie = prompt("Devinez la valeur choisie par l'ordinateur:");
    /**
     * 
     * @type type
     * valeur de saisie convertie en number
     */
    var valeur = Number(saisie);
    nombreDeTour++;
    if (valeur === solution)
    {
        isfind = true;
        console.log("Brovo la solution Ètait " + solution);
        console.log("Vous avez trouvÈ en " + nombreDeTour + " essai(s)");
    } else
    {
        if (valeur < solution) {
            console.log(valeur + " est trop petit ");
        } else if (valeur > solution)
        {
            console.log(valeur + " est trop grand ");
        }
    }
}
if (!isfind)
{
    console.log("Perdu... La solution Ètait " + solution);
}

// D√©commentez temporairement cette ligne pour mieux v√©rifier le programme


// TODO : compl√©tez le programme;