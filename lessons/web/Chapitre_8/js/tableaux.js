ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var tableaux = JSON.parse(reponse);
    // Affiche le titre de chaque film
    var table = document.createElement("table");
    table.id = "tableau" ;
    document.getElementById("contenu").appendChild(table) ;
    
    tableaux.forEach(function (tableau) {
        addElt(tableau) ;
        console.log(tableau.nom);
    })
    
});

function addElt(elt){
    var ligne = document.createElement("tr") ;
    var nom = document.createElement("td") ;
    var annee = document.createElement("td") ;
    var peintre = document.createElement("td") ;
    
    ligne.id = elt.nom ;
    
    nom.textContent = elt.nom ;
    annee.textContent = elt.annee ;
    peintre.textContent = elt.peintre ;
    
    document.getElementById("tableau").appendChild(ligne) ;
    document.getElementById(elt.nom).appendChild(nom) ;
    document.getElementById(elt.nom).appendChild(annee) ;
    document.getElementById(elt.nom).appendChild(peintre) ;
}