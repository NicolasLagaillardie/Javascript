// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

function createBloc(elt, indice) {
    var bloc = document.createElement("p");
    var numQuestion = document.createElement("strong");
    var enonce = document.createElement("i");
    var under = document.createElement("br");
    var button = document.createElement("button");

    bloc.id = "bloc" + indice;
    button.id = indice;

    numQuestion.textContent = "Question " + indice + " ";
    enonce.textContent = elt.enonce;
    button.textContent = "Afficher la réponse";

    button.onclick = function () {
        var reponse = document.createElement("span");
        reponse.textContent = elt.reponse;
        button.parentNode.replaceChild(reponse, button);
    };

    document.getElementById("contenu").appendChild(bloc);
    document.getElementById("bloc" + indice).appendChild(numQuestion);
    document.getElementById("bloc" + indice).appendChild(enonce);
    document.getElementById("bloc" + indice).appendChild(under);
    document.getElementById("bloc" + indice).appendChild(button);
};

for (var i = 0; i < questions.length; i++) {
    createBloc(questions[i], i);
}
