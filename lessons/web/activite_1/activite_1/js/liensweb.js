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

// TODO : compléter ce fichier pour ajouter les liens à la page web

function addURL(elt, id) {

    var bloc = document.createElement("p");
    bloc.id = id;
    bloc.classList = "lien";
    document.getElementById("contenu").appendChild(bloc);

    var toAddTitle = document.createElement("a");
    toAddTitle.className = "liens";
    toAddTitle.textContent = elt.titre;
    toAddTitle.id = id + "a";
    toAddTitle.href = elt.url;
    document.getElementById(id).appendChild(toAddTitle);

    document.getElementById(id + "a").insertAdjacentHTML("afterEnd",
        " " + elt.url + "<br><span>Ajouté par " + elt.auteur + "</span>");


    toAddTitle.style.fontWeight = "bold";
    toAddTitle.style.textDecoration = "none";
    toAddTitle.style.color = "#428bca";
}


for (var i = 0; i < listeLiens.length; i++) {
    addURL(listeLiens[i], i);
}
