// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}

function addHouse(elt) {
    var house = document.createElement("option");
    house.id = elt.code;
    house.textContent = elt.nom;

    document.getElementById("maison").appendChild(house);
}

function addPersos(nom) {
    var perso = document.createElement("li");
    perso.textContent = nom;

    document.getElementById("listePersos").appendChild(perso);

}

for (var i = 0; i < maisons.length; i++) {
    addHouse(maisons[i]);
}

var liste = document.createElement("ul");
liste.id = "listePersos";
document.getElementById("persos").appendChild(liste);

document.getElementById("maison").addEventListener("change", function (e) {
    var codeMaison = e.target[e.target.selectedIndex].id;

    var persos = getPersonnages(codeMaison);

    while (document.getElementById("listePersos").hasChildNodes()) {
        document.getElementById("listePersos").removeChild(document.getElementById("listePersos").lastChild);
    }

    for (var i = 0; i < persos.length; i++) {
        addPersos(persos[i]);
    }
});
