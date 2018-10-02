// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", changeColor);

function changeColor(event) {
    switch (String.fromCharCode(event.charCode)) {
        case "r":
            for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
                document.getElementsByTagName("div")[i].style.backgroundColor = "red";
            }
            break;
        case "j":
            for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
                document.getElementsByTagName("div")[i].style.backgroundColor = "yellow";
            }
            break;
        case "v":
            for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
                document.getElementsByTagName("div")[i].style.backgroundColor = "green";
            }
            break;
        case "b":
            for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
                document.getElementsByTagName("div")[i].style.backgroundColor = "blue";
            }
            break;

        default:
            break
    }
}
