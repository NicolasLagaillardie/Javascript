var nomProfil = prompt("Nom du profil ? ");

var premMinElt = document.getElementById("info");
// Accès aux informations publiques sur le Premier Ministre
ajaxGet("https://api.github.com/users/" + nomProfil, function (reponse) {
    var profil = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = profil.name;
    var logoElt = document.createElement("img");
    logoElt.src = profil.avatar_url;
    var url = document.createElement("a");
    url.href = profil.url;
    url.textContent = profil.url;
    premMinElt.appendChild(logoElt);
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(url);
});
