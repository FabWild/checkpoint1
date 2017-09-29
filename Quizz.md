Tout de mémoire sauf mention @ en début de ligne (une ligne au total).

## Qu'est ce qu’un navigateur ?

```
Un logiciel donnant accès à des ressources web (ensembles de ressources pointant les unes aux autres sur le réseau), locale ou le plus souvent distantes.
Le plus souvent il s'agira des pages web. De navigateurs ajoutent à cela des serveurs mails ou de fichers (ftp ou autre).
```

________________________________________________________________________________________

## Définissez l’ensemble HTML/CSS/JavaScript et leur utilités.


```
Trois langages permettant la présentation d'informations sous la forme de documents cohérents :
- HTML (HyperText Markup Language) : structure et hiérarchisation des données, à l'aide de balises (*tags*) encadrant des éléments du flux de texte
- CSS (Cascading StyleSheets): modification de l'apparence des données présentées
- Javascript : langage de script (et maintenant de programmation complet) permettant d'agir sur les informations présentées et de réagir aux actions initiées côté client (notamment dans le navigateur).
```
________________________________________________________________________________________


## Qu’est-ce qu’un élément HTML ? Un attribut ?

```
@ Un élément HTML est une balise dans son ensemble. ex : <p class="centered"></p>
Un attribut est une indication complétant une balise, permettant de préciser son interprétation. ex : class dans l'exemple précédent. Attribut class a la valeur centered
```
________________________________________________________________________________________


## Dans quels cas utilisez-vous des id au lieu des classes (et vice-versa) ?


```
id : si l'élément désigné est unique. ex. : numérotation ou titre ou nom distincts parmi un ensemble.
classe : si les éléments désignés font partie d'un ensemble, avec des propriétés communes. ex. : dans l'exemple précédent, plusieurs paragraphes sont centrés de la même manière.
```
________________________________________________________________________________________


## Qu’est-ce que EcmaScript ?

```
Javascript standardisé par l'Ecma.
```

________________________________________________________________________________________

## Pourquoi est-il important de bien indenter vos fichiers ?

```
Facilité de lecture par les personnes : moins d'erreurs lors de la saisie, de la correction et modification.
```
________________________________________________________________________________________


## Quelle est la différence entre margin et padding ?

```
Dans le box model, la margin est à l'extérieur de la border, le padding est à l'intérieur.
```

________________________________________________________________________________________


## Citez au moins 3 types de positionnement en CSS et expliquer leurs rôles.

```
position : absolute;
/* la box désignée ici prend comme point d'origine le point en haut à gauche de la box parente */

position : relative;
/* la box désignée ici prend comme point d'origine le point suivant la dernière box trouvée dans le flux des box */

position : inherit;
/* la box désignée ici prend comme type de positionnement celui de la box parente */
 ```
________________________________________________________________________________________

## Qu’est-ce qu’une variable ?

```
Un emplacement aménagé dans la mémoire de l'ordinateur permettant de stocker et plus tard modifier une valeur.
```
________________________________________________________________________________________


## Citez le plus de types JavaScript possible et définissez les rapidement.


```
date : une date (je crois en millisecondes depuis le 1er janvier 70).
string : une chaîne de caractères
array : un tableau (à une dimension)
boolean : vrai ou faux
```
________________________________________________________________________________________


##  À quoi sert le mot-clef “if” ?

```
tester une expression
```

________________________________________________________________________________________

##  Définissez l’objet XHR en JavaScript, son abréviation. À quoi sert-il ?


```
xmlHttprequest
Cet objet sert à lancer une requête à un serveur suivant un protocole donné, par exemple http.
```

________________________________________________________________________________________

## Qu’est-ce qu’une requête HTTP ?

```
Protocole http : protocole utilisé pour transférer des informations depuis ou vers un serveur web.
Une requête http est le fait d'envoyer un message (si possible bien formé) à un serveur suivant le protocole http.
ex. : GET, type de requête lancée par un client à un serveur demandant l'envoi d'informations depuis celui-ci.
```
________________________________________________________________________________________


## Quelle sont les deux types de requêtes permettant de récupérer et d’envoyer de la donnée sur un serveur HTTP ?

```
GET, cf exemple précédent
PUT
```

________________________________________________________________________________________

## À quoi sert le Header d’une requête ? Le “Content-Type” ?

```
A préciser le type des données attendues ou envoyées. Document html, script js, flux vidéo, etc.
```
________________________________________________________________________________________


## Donnez au moins 3 codes de réponse HTTP et définissez les.


```
200 : transfert ok.
302 : redirigé
404 : ressource non disponible à l'adresse indiquée
```
________________________________________________________________________________________


## Définissez les rôles de Scrum Master et Product Owner.


```
Scrum Master : s'assure du respect du cadre scrum. Ex. : Début du daily scrum, s'assure que les post-it sont bien déplacés.
PO : Rôle du client qui a commandé le produit. Responsable de la tenue du backlog.
```
________________________________________________________________________________________


## Citer 4 commandes utilisées avec GIT et expliquer leurs rôles.
```
init : le dossier courant devient un repository prêt à recevoir ou envoyer des fichiers.
add : ajoute des fichiers à la liste des fichiers suivis par git.
branch : crée une branche à partir de la branche courante.
status : montre quels fichiers sont suivis ou non, et quels fichiers ont été modifiés.
```
________________________________________________________________________________________


## Expliquer le code suivant et indiquer le résultat retourné par la fonction.

```
function counter(){
// la phrase est stockée dans une constante appelée sentence
        const sentence = "Validation de la première phase";
// sentence est séparée en mots (suivant les espaces de la phrase), chaque mot dans une case d'un tableau nommé words
        const words = sentence.split(' ');
// déclaration d'une variable count, valeur de 0 assignée
        let count = 0;

// début de boucle, compteur i démarrant à 0, condition de sortie : valeur de i atteint la valeur "longeur du tableau words", action à chaque tour : incrémentation du compteur i.
        for (let i = 0; i < words.length; i++) {
// déclaration variable word, assignation de la valeur : le mot au i-ème rang du tableau words
            var word = words[i];
// la longueur de la chaîne word est ajoutée à la variable count
            count += word.length;
        }
// la fonction retourne la valeur count
        return count;
}
```
```
la fonction compte le nombre de caractères de la phrase en excluant les espaces.
```
________________________________________________________________________________________


## Algo

Ecrire l’algorithme d’une fonction prenant en paramètre 2 arguments : le premier est une chaîne de caractère et le second correspondant au caractère recherché. Cette fonction retourne le nombre de fois que le caractère recherché est rencontré dans la chaîne de caractères.
Ex.
   * chaîne : ‘examen’, caractère : ‘x’ => 1
   * chaîne : ‘wild code school’, caractère : ‘w’ => 1


```
// boucle for qui parcourt la chaîne, un compteur utilsé pour compter le nombre d'occurences de la lettre

function count_1char(str,char){
  // un tableau qui listera les rangs des occurences.
  let occ = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i]==char) {
      occ.push(i);
    }
  return occ.length;
}

count_1char(‘examen’,'x');
count_1char(‘wild code school’,‘w’);
```
