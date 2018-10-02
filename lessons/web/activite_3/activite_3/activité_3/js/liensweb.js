/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
/*var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }

];*/



// TODO : compléter ce fichier pour ajouter les liens à la page web

function creerElementLien(lien) {
    // on créé le lien 
    var titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight = "5px";
    titreElt.appendChild(document.createTextNode(lien.titre));

    var urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(lien.url));

    // On implante le titre et l'URL 
    var ligneTitreElt = document.createElement("h4");
    ligneTitreElt.style.margin = "0px";
    ligneTitreElt.appendChild(titreElt);
    ligneTitreElt.appendChild(urlElt);

    // On fait suivre par la ligne de l'auteur
    var ligneAuteurElt = document.createElement("span");
    ligneAuteurElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    // On insere tout dans la balise div
    var divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(ligneAuteurElt);

    return divLienElt;
}



var divElt = document.createElement("div");
var boutonAjoutLien = document.createElement("button");
boutonAjoutLien.textContent = "Ajouter un lien";
divElt.appendChild(boutonAjoutLien);

boutonAjoutLien.addEventListener("click", function () {
    // formulaire de saisie pour creer le lien :
    var formulaireElt = document.createElement("form");
    var champAuteur = document.createElement("input");
    var champTitre = document.createElement("input");
    var champUrl = document.createElement("input");
    var boutonSubmit = document.createElement("input");
    // Attribut pour formulaire
    boutonSubmit.type = "submit";
    boutonSubmit.value = "Ajouter";
    boutonSubmit.style.marginLeft = "8px";

    // Texte afficher
    champAuteur.placeholder = "Entre notre nom";
    champTitre.placeholder = "Entre le titre de votre lien";
    champUrl.placeholder = "Entre l'URL du lien";
    // Champs obligatoire
    champAuteur.required = true;
    champTitre.required = true;
    champUrl.required = true;
    // On insère tout les élements dans le formulaire
    formulaireElt.appendChild(champAuteur);
    formulaireElt.appendChild(champTitre);
    formulaireElt.appendChild(champUrl);
    formulaireElt.appendChild(boutonSubmit);
    // Pour faire apparaître le formulaire à la place du bouton
    divElt.innerHTML = "";
    divElt.appendChild(formulaireElt);
    // Evenement sur bouton ajouter 
    formulaireElt.addEventListener("submit", function (e) {
        e.preventDefault();

        // On rajoute la condition pour l'URL
        var url = champUrl.value;

        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            url = "http://" + url;
        }
        // on crée un nouvel objet
        var newLien = {
            titre: champTitre.value,
            url: url,
            auteur: champAuteur.value
        };

        var lienElt = creerElementLien(newLien);
        // Ajoute le nouveau lien en haut de la liste
        contenuElt.insertBefore(lienElt, contenuElt.childNodes[2]);

        // Message afficher de confirmation 
        
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", newLien, function (reponse) {
            var confimationElt = document.createElement("div");
            confimationElt.id = "confirmation";
            divElt.innerHTML = "";
            divElt.appendChild(confimationElt);
            confimationElt.textContent = "Votre lien '" + champTitre.value + "' à bien été ajouté !";
        }, true);


        // Remise à zéro 
        setTimeout(function () {
            divElt.innerHTML = "";
            divElt.appendChild(boutonAjoutLien);
        }, 2000);
    })

})

// On insere le tout dans une balise p
var saisieElt = document.createElement("p");
saisieElt.appendChild(divElt);
document.getElementById("contenu").appendChild(saisieElt);

var contenuElt = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien

ajaxGet(" https://oc-jswebsrv.herokuapp.com/api/liens", function (reponse) {
    var reponseLien = JSON.parse(reponse);
    reponseLien.forEach(function (lien) {
        var lienElt = creerElementLien(lien);
        contenuElt.appendChild(lienElt);
    });
});
