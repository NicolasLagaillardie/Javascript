var contenu = document.getElementById("contenu");

ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens",function(load){
    var load = JSON.parse(load);           
    for(var i = 0 ; i < load.length ; i++){
        var ajax = {
            titre: load[i].titre,
            url: load[i].url,
            auteur: load[i].auteur
        }                
        contenu.append(listeElt(ajax))
    }
}); 

function listeElt(lien) {
        var titreElt = document.createElement("a");
        titreElt.href = lien.url;
        titreElt.style.color = "#428bca";
        titreElt.style.textDecoration = "none";
        titreElt.style.marginRight = "5px";
        titreElt.style.fontSize = "16px";
        titreElt.appendChild(document.createTextNode(lien.titre));
    
        var urlElt = document.createElement("span");
        urlElt.style.fontSize = "13px";
        urlElt.appendChild(document.createTextNode(lien.url));
    
        var insElt = document.createElement("h2");
        insElt.style.margin = "0px";
        insElt.appendChild(titreElt);
        insElt.appendChild(urlElt);
    
        var auteurElt = document.createElement("span");
        auteurElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));
    
        var divElt  = document.createElement("div");
        divElt.classList.add("lien");
        divElt.appendChild(insElt);
        divElt.appendChild(auteurElt);
    
        return divElt;
};
 



var butElt = document.createElement("button");
butElt.textContent = "Ajouter un lien";

var pElt = document.createElement("p");
    
pElt.appendChild(butElt);
document.body.insertBefore(pElt,contenu);

function caseElt(id,desc){
        var inputElt = document.createElement("input");
        inputElt.setAttribute("type", "text");
        inputElt.setAttribute("name",id);
        inputElt.setAttribute("id",id);
        inputElt.setAttribute("placeholder",desc);
        inputElt.setAttribute("required","required");
        inputElt.style.marginRight = "10px";
        
        return inputElt;
}
butElt.addEventListener("click", function(){
    butElt.style.display = "none";
    
    var formElt = document.createElement("form");
    
    var auteurElt = caseElt("auteur","Entrez votre nom");
    
    var titreElt = caseElt("titre","Entrez le titre du lien");
    
    var urlElt = caseElt("url","Entrez l'url du lien");
    
    var ajoutElt = document.createElement("button");
    ajoutElt.textContent = "Ajouter";
    
    formElt.appendChild(auteurElt);
    formElt.appendChild(titreElt);
    formElt.appendChild(urlElt);
    formElt.appendChild(ajoutElt);
    pElt.insertBefore(formElt,butElt);
    
    formElt.addEventListener("submit" , function(e) {
            var envElt = formElt.elements.url.value;
            //var envElt = url.value;
       
            if (envElt.indexOf("http://") == -1 || envElt.indexOf("https://") == -1){         
                envElt = "http://" + envElt;
            }   
        
            /*
            var newLien = Object.create(listeLiens);
            newLien.titre = formElt.elements.titre.value;
            newLien.url = envElt;
            newLien.auteur = formElt.elements.auteur.value;
            */
           

        var newLien = {
            titre: titre.value,
            url: envElt,
            auteur: auteur.value
        };
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien",newLien,true,function(){
        
            var ajLien = listeElt(newLien);
            
            contenu.insertBefore(ajLien, contenu.firstChild);    
            
            formElt.style.display = "none"; 
            butElt.style.display = "block";
    
            var winElt = document.createElement ("p")
            winElt.textContent = 'Le lien "'+ newLien.titre +'" a bien été ajouter.'; 
            
            pElt.insertBefore(winElt, butElt);
            
            setTimeout(function () {
                pElt.removeChild(winElt);
            }, 2000)
        }); 
        e.preventDefault();
    }); 
});
function ajaxPost(url,data, isJson,callback) {
    var req = new XMLHttpRequest();
    req.open("Post", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {      
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    req.send(data);
}

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("Get", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}


     
