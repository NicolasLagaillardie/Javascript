// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

function addURL(text, id) {
    var toAdd = document.createElement("a");
    toAdd.textContent = text;
    toAdd.href = text;
    toAdd.id = id;
    console.log(toAdd);
    document.getElementById("contenu").appendChild(toAdd);
    document.getElementById(id).innerHTML += '<br>';
}

for (var i = 0; i < journaux.length; i++) {
    addURL(journaux[i], i)
}
