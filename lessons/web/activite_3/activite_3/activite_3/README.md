
Exercices
Activité 3 - Utilisez un serveur web externe

Temps d'attente moyen pour être corrigé sur cet exercice : 2 jour

Retour au cours

Dans cette activité finale, vous allez utiliser un serveur web externe pour rendre votre application de liens web véritablement opérationnelle.

Pour commencer, reprenez le code issu de votre activité 2 ou de la correction-type que vous aviez téléchargée précédemment. La structure de l’application reste la même. Renommez uniquement le répertoire activite_2 sous le nom activite_3. Vous devez obtenir l’arborescence suivante.

Votre travail consiste à connecter l’application au serveur https://oc-jswebsrv.herokuapp.com pour récupérer les derniers liens publiés et ajouter un nouveau lien.

L’API de récupération des liens est https://oc-jswebsrv.herokuapp.com/api/liens. Elle renvoie les derniers liens ajoutés sous forme de tableau JSON.

L’API d’ajout d’un lien est https://oc-jswebsrv.herokuapp.com/api/lien. Elle attend un objet JSON représentant un lien.

 

Attention : https://oc-jswebsrv.herokuapp.com/api/lien sert à publier un lien et n’accepte que le protocole HTTP POST. L’URL pour récupérer la liste des liens est https://oc-jswebsrv.herokuapp.com/api/liens.

 

Voici le format JSON d’un lien.

{

  “titre”: “titre du lien”,

  “url”: “URL du lien”,

  “auteur”: “auteur du lien”

}

Voici quelques consignes supplémentaires :

    Les liens affichés sont récupérés depuis le serveur.
    Le nouveau lien n’est affiché sur la page qu’en cas de succès de l’ajout sur le serveur.
    Le formulaire d’ajout est remplacé par le bouton “Ajouter un lien” quel que soit le résultat de l’ajout sur le serveur.
    Contrairement à l’activité 2, le rechargement de la page web affiche toujours le nouveau lien puisque celui-ci est sauvegardé sur le serveur.
    Les communications avec le serveur utilisent les fonctions ajaxGet et ajaxPost définies dans le cours.
    Les variables JavaScript doivent respecter la norme camelCase et le fichier liensweb.js doit être correctement indenté.

Remarque : le serveur est utilisé par tous les apprenants OpenClassrooms. La liste des liens varie en fonction de leur activité.

 

 

Envoyez l’activité sous la forme d’une archive zip contenant votre répertoire activite_3 et tout son contenu.

Bon courage !
Sélection du travail
Votre travail (format .zip, 70 Mo max)
Comment créer un fichier ZIP sous Windows ? Sous Mac OS X ?
Vous pouvez laisser un mot à l'attention de vos correcteurs si vous le souhaitez :
Validation

Attention Relisez-vous bien ! Après soumission de votre travail, vous ne pourrez plus le modifier ni en renvoyer un nouveau !