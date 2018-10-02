// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

function toAdd(description) {

    var titreStrong = document.createElement("strong"); // Création d'un élément li
    titreStrong.textContent = description.terme; // Définition de son contenu textuel

    var titreElt = document.createElement("dt"); // Création d'un élément li
    titreElt.id = description.terme; // Définition de son identifiant
    
    document.getElementById("dl").appendChild(titreElt); // Insertion du nouvel élément
    document.getElementById(description.terme).appendChild(titreStrong); // Insertion du nouvel élément
    
    var titreDescr = document.createElement("dd"); // Création d'un élément li
    titreDescr.textContent = description.definition; // Définition de son identifiant
    
    document.getElementById("dl").appendChild(titreDescr); // Insertion du nouvel 
    
}

var dl = document.createElement("dl"); // Création d'un élément li
dl.id = "dl"; // Définition de son identifiant
document.getElementById("contenu").appendChild(dl); // Insertion du nouvel élément


for (var i = 0; i < mots.length; i++) {
    toAdd(mots[i], i)
}

