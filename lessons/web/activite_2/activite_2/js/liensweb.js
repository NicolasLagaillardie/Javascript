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

var formulaire = [
    {
        type: "name",
        name: "nom",
        id: "nom",
        placeholder: "Entrez votre nom",
    },
    {
        type: "name",
        name: "nomUrl",
        id: "nomUrl",
        placeholder: "Entrez le nom de l'URL",
    },
    {
        type: "url",
        name: "url",
        id: "url",
        placeholder: "Entrez l'URL",
    }
]

// TODO : compléter ce fichier pour ajouter les liens à la page web

function addURL(elt, id) {

    var bloc = document.createElement("p");
    var toAddTitle = document.createElement("a");
    var retour = document.createElement("br");
    var auteur = document.createElement("span");
    var url = document.createElement("span");

    bloc.id = id;
    bloc.classList = "lien";

    auteur.textContent = "Ajouté par " + elt.auteur;

    url.textContent = " " + elt.url;

    toAddTitle.className = "liens";
    toAddTitle.textContent = elt.titre;
    toAddTitle.id = id + "a";
    toAddTitle.href = elt.url;

    toAddTitle.style.fontWeight = "bold";
    toAddTitle.style.textDecoration = "none";
    toAddTitle.style.color = "#428bca";

    document.getElementById("contenu").appendChild(bloc);
    document.getElementById(id).appendChild(toAddTitle);
    document.getElementById(id).appendChild(url);
    document.getElementById(id).appendChild(retour);
    document.getElementById(id).appendChild(auteur);
}

function addInputForm(elt, id) {
    var bloc = document.createElement("p");
    var input = document.createElement("input");
    var aide = document.createElement("span");

    bloc.id = "formulaire" + id;

    input.type = elt.type;
    input.name = elt.name;
    input.id = elt.id;
    input.setAttribute('required', 'required');
    input.placeholder = elt.placeholder;

    aide.id = "aide" + elt.name;

    document.getElementById("formulaire").appendChild(bloc);
    document.getElementById("formulaire" + id).appendChild(input);
    document.getElementById("formulaire" + id).appendChild(aide);
}

function resetForm(elt, id) {
    var input = document.getElementById(elt.id);
    input.value = "";
}

for (var i = 0; i < listeLiens.length; i++) {
    addURL(listeLiens[i], i);
}

var index = listeLiens.length;

var message = document.createElement("p");
message.id = "message";

var addLink = document.createElement("button");
addLink.textContent = "Ajouter un lien";
addLink.id = "toAddURL";
document.querySelector("body").insertBefore(addLink, document.getElementById("contenu"));

var form = document.createElement("form");
form.id = "formulaire";

var submitForm = document.createElement("button");
submitForm.textContent = "Ajouter";
submitForm.type = "submit";
submitForm.value = "envoyer";

addLink.onclick = function () {
    document.querySelector("body").removeChild(document.querySelector("button"));
    document.querySelector("body").insertBefore(form, document.getElementById("contenu"));

    if (index < 4) {
        for (var i = 0; i < formulaire.length; i++) {
            addInputForm(formulaire[i], i);
        }
    } else {
        for (var i = 0; i < formulaire.length; i++) {
            resetForm(formulaire[i], i);
        }
    }

    document.getElementById("formulaire").appendChild(submitForm);

}

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Annulation de l'envoi des données      
    addURL({
        titre: document.getElementById("nom").value,
        url: document.getElementById("url").value,
        auteur: document.getElementById("nomUrl").value
    }, index);
    index++;
    
    message.textContent = "Le lien " + document.getElementById("url").value + " a bien été ajouté"
    
    document.querySelector("body").removeChild(document.querySelector("form"));
    document.querySelector("body").insertBefore(addLink, document.getElementById("contenu"));

    document.querySelector("body").insertBefore(message, addLink);

    setTimeout(function () {
        document.querySelector("body").removeChild(document.getElementById("message"));
    }, 2000);
});
