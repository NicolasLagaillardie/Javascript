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

var listeElt0 = document.createElement("span");
	listeElt0.className = "lien";
	listeElt0.style.display = "block";
	
var listeElt1 = document.createElement("span");
	listeElt1.className = "lien";
	listeElt1.style.display = "block";
	
var listeElt2 = document.createElement("span");
	listeElt2.className = "lien";
	listeElt2.style.display = "block";
	
//////////////////////////////////////////////////////////////////////////////////////
//// J'ai essayer de faire la même chose mais de façon plus compact avec une boucle :

/*

for (i=0; i < 3; i++) {

	var listeElt[i] = document.createElement("span");
	listeElt[i].className = "lien";
	listeElt[i].style.display = "block";

}	

// Resultat: Cela n'a pas fonctionner, si vous savez pourquoi, faites le moi savoir dans votre commentaire.

/////////////////////////////////////////////////////////////////////////////////////

*/
	
	

var i = 0;

listeLiens.forEach(function (lien) {
	
	var titreElt = document.createElement("h1");
	var aElt = document.createElement("a");
	aElt.textContent = lien.titre;
	aElt.style.color = "#428bca";
	aElt.href = lien.url;
	aElt.style.textDecoration = "none";
	titreElt.style.display = "inline-block";
	titreElt.style.marginTop = "0px";
	
    var urlElt = document.createElement("p");
    urlElt.textContent = lien.url;
	urlElt.style.marginLeft = "10px";
	urlElt.style.display = "inline-block"
	
	
	var auteurElt = document.createElement("p");
    auteurElt.textContent = "Ajouté par " + lien.auteur;
	auteurElt.style.marginTop = "-10px";

	
	switch (i) {
	
	
		case 0:
			listeElt0.appendChild(titreElt);
			titreElt.appendChild(aElt);
			listeElt0.appendChild(urlElt);
			listeElt0.appendChild(auteurElt);
			i++;
			break;
	
		case 1:
			listeElt1.appendChild(titreElt);
			titreElt.appendChild(aElt);
			listeElt1.appendChild(urlElt);
			listeElt1.appendChild(auteurElt);
			i++;
			break;
	
		case 2:
			listeElt2.appendChild(titreElt);
			titreElt.appendChild(aElt);
			listeElt2.appendChild(urlElt);
			listeElt2.appendChild(auteurElt);
			i++;
			break;
	
	}
	
	
});


document.getElementById("contenu").appendChild(listeElt0); 
document.getElementById("contenu").appendChild(listeElt1); 
document.getElementById("contenu").appendChild(listeElt2); 








