/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
let listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


//Récupération du de la div classe Contenu
let contenu = document.getElementById('contenu');
let ajout = document.getElementById('ajout');
let form = document.getElementsByTagName('form')[0];
let message= document.getElementById('message');

affichage();

ajout.addEventListener('click', function ()
{
    ajout.style.display = 'none';
    form.style.display = 'block';
});

form.addEventListener('submit', function (e)
{
    e.preventDefault();
    let nouveauNom = document.getElementById('nom').value;
    let nouveauTitre = document.getElementById('titre').value;
    let nouveauLien = document.getElementById('lien').value;

     if (nouveauNom !== '')
     {
         if (nouveauTitre !== '')
             {
                 if (nouveauLien !== '')
                 {
                     if (nouveauLien.indexOf('http', 0) === -1)
                     {
                         nouveauLien = 'http://' + document.getElementById('lien').value;
                     }

                         let nouveauTab =
                             {
                                 titre: nouveauTitre,
                                 url: nouveauLien,
                                 auteur: nouveauNom
                             };
                         listeLiens.unshift(nouveauTab);

                     viderContenu();
                     affichage();

                     form.style.display = 'none';

                     message.textContent = 'Le lien "' +nouveauTab.titre+ '" a bien été ajouté.';
                     message.style.display ='flex';
                     message.style.alignItems ='center';
                     message.style.marginBottom = '10px';
                     message.style.height = '50px';
                     message.style.padding = '0 20px';
                     message.style.backgroundColor = '#90afc3';
                     message.style.color = '#2e2ac3';
                     message.style.fontSize = '20px';
                     ajout.style.display = 'block';

                     setTimeout(hideMessage, 2000);
                 }
             }
     }
});

function hideMessage()
{
    message.style.display = 'none';
}

function viderContenu()
{
    while (contenu.firstChild)
    {
        contenu.removeChild(contenu.firstChild);
    }

}

function affichage()
{
    //Boucle pour traiter tout le tableau
    listeLiens.forEach(function (index)
    {

        //Création d'une nouvelle div en lui donnant la classe lien pour correspondre au fichier CSS,
        // un font-weight et un font-size important pour pouvoir plus tard utiliser le span du fichier CSS
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'lien');
        newDiv.style.fontWeight = '800';
        newDiv.style.fontSize = '110%';

        //Création du lien cliquable avec la couleur donnée par l'énoncé
        let lien = document.createElement('a');
        lien.href = index.url;
        lien.style.color = '#428bca';
        lien.style.textDecoration = 'none';
        lien.textContent = index.titre;

        //Création du premier paragraphe qui va contenir le lien et son url avec les span pour correspondre au fichier CSS
        let paragraphe = document.createElement('p');
        paragraphe.innerHTML = '<span> ' + index.url + '</span>';

        //Création du paragraphe auteur avec les span pour correspondre au fichier CSS
        let auteur = document.createElement('p');
        auteur.innerHTML = '<span>Ajouté par ' + index.auteur + '</span>';


        // Agencement de la structure de la nouvelle div et ajout de la nouvelle div dans le contenu existant
        paragraphe.insertAdjacentElement('afterbegin', lien);

        newDiv.appendChild(paragraphe);
        newDiv.appendChild(auteur);

        contenu.appendChild(newDiv);
    });
}
