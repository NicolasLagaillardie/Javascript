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

for (var i=0 ; i < listeLiens.length; i++){
			
			var blockElt = document.createElement("div");
			blockElt.style.backgroundColor = "white";
			blockElt.style.margin = "10px";
			blockElt.style.padding = "10px";
			blockElt.id = "element"+i;
			document.getElementById("contenu").appendChild(blockElt);
			
			var lienElt = document.createElement("a");
			lienElt.style.color = "#428bca";
			lienElt.style.textDecoration = "none";
			lienElt.style.fontWeight = "bold";
			lienElt.href = listeLiens[i].url;
			lienElt.textContent = listeLiens[i].titre;
			document.getElementById(blockElt.id).appendChild(lienElt);
			
			var urlElt = document.createElement("span");
			urlElt.style.paddingLeft = "5px";
			urlElt.textContent = listeLiens[i].url;
			document.getElementById(blockElt.id).appendChild(urlElt);
			
			var brElt = document.createElement("br");
			document.getElementById(blockElt.id).appendChild(brElt);
			
			var auteurElt = document.createElement("span");
			auteurElt.style.margin = "0px";
			auteurElt.textContent = "Ajouté par "+listeLiens[i].auteur;
			document.getElementById(blockElt.id).appendChild(auteurElt);
			
		};