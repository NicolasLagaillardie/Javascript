var pElt = document.querySelectorAll("div");

var couleurText = prompt("Couleur texte en code RGB, separe par des virgules ?");
var couleurFond = prompt("Couleur fond en code RGB, separe par des virgules ?");

var temp = couleurFond.split(",");
couleurFond = "rgb(" + Number(temp[0]) + "," + Number(temp[1]) + "," + Number(temp[2]) + ")";
temp = couleurText.split(",");
couleurText = "rgb(" + Number(temp[0]) + "," + Number(temp[1]) + "," + Number(temp[2]) + ")";

pElt.item(0).style.color = couleurText;
pElt.item(1).style.color = couleurText;
pElt.item(2).style.color = couleurText;

pElt.item(0).style.backgroundColor = couleurFond;
pElt.item(1).style.backgroundColor = couleurFond;
pElt.item(2).style.backgroundColor = couleurFond;