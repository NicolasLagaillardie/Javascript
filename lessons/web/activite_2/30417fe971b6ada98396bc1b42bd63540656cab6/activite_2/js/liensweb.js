/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
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
];

function onlyButton() { // Fonction permettant de créer le bouton donnant accès au formulaire d'ajout
    let buttonElm = document.createElement("button"); // Création du bouton
    buttonElm.id = "afficher"; // Id
    buttonElm.textContent = "Ajouter un lien"; // Text
    buttonElm.classList.add("button"); // Style du bouton
    buttonElm.addEventListener("click", printForm); // Si on clique sur le bouton, on lance la méthode printForm qui va se charger d'afficher le formulaire d'insertion d'un nouveau lien

    formulaireDiv.innerHTMl = ""; // On vide le code HTML précédant pouvant éventuellement exister
    formulaireDiv.appendChild(buttonElm); // On ajoute le bouton
}

function printForm(e) { // Méthode permettant d'afficher le formulaire d'insertion d'un nouveau lien

    document.getElementById("formulaire").removeChild(document.getElementById("afficher")); // On supprime le bouton permettant d'afficher le formulaire que l'on va créer

    let formElm = document.createElement("form"); // Création de l'élément form

    let input1 = document.createElement("input"); // Création du premier input
    input1.classList.add("input"); // Class
    input1.placeholder = " Entrez le nom de l'auteur";
    input1.name = "nom"; // Name
    input1.required = true; // Required

    let input2 = document.createElement("input"); // Création du deuxième input
    input2.classList.add("input"); // Class
    input2.placeholder = "Entrer le titre du lien";
    input2.name = "titre"; // Name
    input2.required = true; // Required

    let input3 = document.createElement("input"); // Création du troisième input
    input3.classList.add("input"); // Class
    input3.placeholder = "Enter l'URL du lien";
    input3.name = "url"; // Name
    input3.required = true; // Required

    let buttonConfirm = document.createElement("button"); // Création du bouton de confirmation du formulaire
    buttonConfirm.classList.add("button"); // Class
    buttonConfirm.textContent = "Ajouter"; // Text
    buttonConfirm.type = "submit"; // Type submit pour envoyer le formulaire

    formElm.appendChild(input1); // On ajoute l'input1 au formulaire
    formElm.appendChild(input2); // On ajoute l'input2 au formulaire
    formElm.appendChild(input3); // On ajout l'input3 au formulaire
    formElm.appendChild(buttonConfirm); // On ajoute le bouton de confirmation au formulaire

    formElm.addEventListener("submit", function (e) { // On ajoute un gestionnaire d'événement lorsque le formulaire est soumis
        let form = e.target; // Récupération du formulaire

        let name = form.elements.nom.value; // Récupération de la valeur de l'input name
        let titre = form.elements.titre.value; // Récupération de la valeur de l'input titre
        let url = form.elements.url.value; // Récupération de la valeur de l'input url

        let regexHTTP = /http:\/\/\.*/; // Regex permettant de savoir si une chaine contient http:// au début
        let regexHTTPS = /https:\/\/\.*/; // Regex permettant de savoir si une chaine contient https:// au début

        if (!regexHTTP.test(url) && !regexHTTPS.test(url)) // Si ka chaine ne contient ni http:// ni https:// au début
            url = "http://" + url; // On ajoute http au début

        let h2Elm = document.createElement("h2"); // Création d'un élément h2
        h2Elm.style.padding = "20px"; // Style
        h2Elm.textContent = 'Le lien "' + titre + '" a bien été ajouté ! '; // Text du h2

        messageDiv.classList.add("message"); // Style de la div contenant le message à afficher

        messageDiv.appendChild(h2Elm); // On ajoute le message à la div

        formulaireDiv.removeChild(form); // On supprime le formulaire

        let elementLien = creerElementLien({
            titre: titre,
            url: url,
            auteur: name
        }); // On créé un nouveau lien en passant en paramètre un objet comportant l'ensemble des informations receuillies

        contenu.insertBefore(elementLien, document.getElementsByClassName("lien")[0]); // On ajoute en première position le nouveau lien parmi les autres

        onlyButton(); // On réaffiche le bouton pour afficher de nouveau le formulaire

        setTimeout(function () { // Après 2s, on vide la div contenant le message de confirmation
            messageDiv.innerHTML = "";
        }, 2000);
    });

    formulaireDiv.appendChild(formElm); // On ajoute le formulaire à la div
}

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
let messageDiv = document.createElement("div"); // Div contenant le futur message de confirmation
let formulaireDiv = document.createElement("div"); // Création de la div qui va contenir le formulaire

formulaireDiv.id = "formulaire"; // Id
formulaireDiv.style.padding = "10px"; // Style de la div
formulaireDiv.style.marginBottom = "10px"; // Style de la div

contenu.appendChild(messageDiv); // On ajoute la div message à la div contenu
contenu.appendChild(formulaireDiv); // Ajout de la div contenant le formulaire

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

onlyButton(); // Création du bouton pour afficher le formulaire
