/* 
Activité 3
*/

var serveurUrl = "https://oc-jswebsrv.herokuapp.com";

// Fonction qui va creer un element lien et le retourner
function creerElementLien(lien) {
    // Creation du titre
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    // Creation de l'URL
    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Ligne (titre + URL)
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    // Element qui va contenir l'element du titre et URL + l'auteur 
    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

// Recuperation de la DIV contenu
var contenu = document.getElementById("contenu");
// Récupération de la liste via la fonction AJAX
ajaxGet(serveurUrl + "/api/liens", function (reponse) {
    // Parsing de la chaîne JSON en JS
    var listeLiens = JSON.parse(reponse);
    // Pour chaque element de la liste
    listeLiens.forEach(function (lien) {
        // On cree le lien
        var elementLien = creerElementLien(lien);
        // On l'ajoute au contenu
        contenu.appendChild(elementLien);
    });
});

// Fonction qui va permettre de creer un element html <input>
function creerElementInput(placeholder, taille) {
    var elementInput = document.createElement("input");
    elementInput.type = "text";
    elementInput.setAttribute("placeholder", placeholder);
    elementInput.setAttribute("size", taille);
    elementInput.setAttribute("required", "true");
    return elementInput;
}

// Recuperer l'element (bouton)
var bouton = document.getElementById("ajoutLien");
// Gère l'ajout d'un nouveau lien
bouton.addEventListener("click", function () {
    // Création des champs pour l'ajout du nouveau lien
    var auteurInput = creerElementInput("Entrez votre nom", 20);
    var titreInput = creerElementInput("Entrez le titre du lien", 40);
    var urlInput = creerElementInput("Entrez l'URL du lien", 40);

    // Bouton d'ajout du nouveau lien
    var boutonAjoutNouveauLien = document.createElement("input");
    boutonAjoutNouveauLien.type = "submit";
    boutonAjoutNouveauLien.value = "Ajouter";

    // Formulaire d'ajout
    var formulaireAjout = document.createElement("form");
    formulaireAjout.appendChild(auteurInput);
    formulaireAjout.appendChild(titreInput);
    formulaireAjout.appendChild(urlInput);
    formulaireAjout.appendChild(boutonAjoutNouveauLien);

    var p = document.querySelector("p");
    // Remplace le bouton d'ajout par le formulaire d'ajout
    p.replaceChild(formulaireAjout, bouton);

    // Ajoute le nouveau lien
    formulaireAjout.addEventListener("submit", function () {
        var url = urlElt.value;
        // Si l'URL ne commence ni par "http://" ni par "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // On la préfixe par "http://"
            url = "http://" + url;
        }

        // Création de l'objet contenant les données du nouveau lien
        var lien = {
            titre: titreInput.value, // Recuperation du titre de l'input
            url: url, // Son URL
            auteur: auteurInput.value // Idem pour l'auteur
        };

        // Utilisation de la fonction AJAX pour l'envoi du nouveau lien au serveur
        ajaxPost(serveurUrl + "/api/lien", lien,
            function (reponse) {
                // Creation du nouvel element
                var nouveauElementLien = creerElementLien(lien);
                // Ajoute le nouveau lien en premier
                contenu.insertBefore(nouveauElementLien, contenu.firstChild);  
                // Message
                var messageInfo = document.createElement("div");
                messageInfo.classList.add("info");
                messageInfo.textContent = "Le lien \"" + lien.titre + "\" a bien été ajouté.";
                p.insertBefore(messageInfo, bouton);
                // Suppresion après 2 secondes
                setTimeout(function () {
                    p.removeChild(messageInfo);
                }, 2000);
            },
            true
        );
        // Remplace le formulaire d'ajout par le bouton d'ajout une fois l'envoi terminé
        p.replaceChild(bouton, formulaireAjout);
    });
});