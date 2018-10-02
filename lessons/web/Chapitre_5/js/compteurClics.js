function clic() {
    document.getElementById("compteurClics").textContent =  Number(document.getElementById("compteurClics").textContent) + 1 ;
};

var boutonElt = document.getElementById("clic");

boutonElt.addEventListener("click", clic);

function disable() {
    boutonElt.removeEventListener("click", clic);
};

var boutonDisable = document.getElementById("desactiver");
boutonDisable.addEventListener("click", disable);
