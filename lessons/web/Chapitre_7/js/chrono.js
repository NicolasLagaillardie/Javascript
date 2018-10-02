var compteurElt = document.getElementById("compteur");
var go = true;

// Diminue le compteur jusqu'à 0
function augmenterCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (go) {
        compteurElt.textContent = compteur + 1;
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(augmenterCompteur, 1000);

var button = document.createElement("button");

button.onclick = function () {
    //compteurElt.textContent = 0;
    go = !go ;
};

button.textContent = "Arrêter";
document.querySelector("body").appendChild(button);
