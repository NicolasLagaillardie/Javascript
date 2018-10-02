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

var contenuElt = document.getElementById("contenu");

listeLiens.forEach(function (listeLien) {
	"use strict";
	
	// Création des éléments
	var lienElt    = document.createElement("div"),
		titreElt   = document.createElement("a"),
		strongElt  = document.createElement("strong"),
		urlElt     = document.createElement("span"),
		auteurElt  = document.createElement("span"),
		brElt      = document.createElement("br");
	
	// Modification des éléments
	lienElt.className = "lien";
	titreElt.href = listeLien.url;
	titreElt.style.color = "#428bca";
	titreElt.style.textDecoration = "none";
	strongElt.textContent = listeLien.titre;
	urlElt.textContent = "\n" + listeLien.url;
	auteurElt.textContent = "Ajouté par " + listeLien.auteur;
	
	// Intégration des éléments
	titreElt.appendChild(strongElt);
	lienElt.appendChild(titreElt);
	lienElt.appendChild(urlElt);
	lienElt.appendChild(brElt);
	lienElt.appendChild(auteurElt);
	contenuElt.appendChild(lienElt);
});