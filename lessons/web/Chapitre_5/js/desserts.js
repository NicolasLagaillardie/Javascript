function clic(){
    var dessert = prompt("Quel desseret voulez-vous ajouter ?");
    
    var toAdd = document.createElement("li");
    toAdd.textContent = dessert;
    document.getElementById("desserts").appendChild(toAdd);
}