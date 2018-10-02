document.getElementById("infoMdp").textContent = " ";

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp1").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var regexMdp = /.*\d.*/;
    var validateMdp = "";
    if (!regexMdp.test(e.target.value)) {
        validateMdp = "Mot de passe sans chiffre";
    }
    if (mdp.length < 6) {
        validateMdp = "Mot de passe trop court";
    }
    document.getElementById("infoMdp").textContent = validateMdp;
});

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp2").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var validateMdp = "";
    if (mdp !== document.getElementById("mdp1").value) {
        validateMdp = "Les mots de passe ne correspondent pas";
    }
    document.getElementById("infoMdp").textContent = validateMdp;
});

var form = document.querySelector("form");

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var regexMdp = /.*\d.*/;

    if (mdp1 === mdp2 && 6 <= mdp1.length && regexMdp.test(mdp1)) {
        console.log("Votre mot de passe : " + mdp1);
    } else {
        e.preventDefault(); // Annulation de l'envoi des données
    }
    e.preventDefault(); // Annulation de l'envoi des données
});
