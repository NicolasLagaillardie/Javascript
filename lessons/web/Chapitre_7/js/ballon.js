var start = document.getElementById("demarrer");
var stop = document.getElementById("arreter");

var sens = 1;

start.onclick = function () {
    animationId = requestAnimationFrame(deplacerBallon); // Début de l'animation  
    start.setAttribute('disabled', 'disabled');
    stop.removeAttribute("disabled") ;
};

stop.onclick = function () {
    cancelAnimationFrame(animationId);
    start.removeAttribute("disabled") ;
    stop.setAttribute('disabled', 'disabled');
};

var img = document.getElementById('ballon');
var width = parseFloat(img.clientWidth);

var ballon = document.getElementById("ballon");
var vitesse = 5; // Valeur du déplacement en pixels
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBallon() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    if (0 <= xBallon && (xBallon + width + 5) <= window.innerWidth) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        ballon.style.left = (xBallon + sens * vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBallon);
    } else {
        // Annulation de l'animation
        //cancelAnimationFrame(animationId);
        sens = sens * (-1);
        // Déplacement du bloc
        ballon.style.left = (xBallon + sens * vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBallon);
    }
}
