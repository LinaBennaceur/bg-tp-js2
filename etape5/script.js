"use strict";
// "use strict" : mode strict, signale les variables non déclarées (slide 51)
// Variable globale déclarée avec let (slides 37 et 51), portée globale (slide 50)
// "lignes" est le compteur de lignes insérées, initialisé à 0
let lignes = 0;
// Total des points
// Variable globale (slides 37, 50 et 51) : total des points, initialisé à 0
let total_points = 0;
// Tableau d'objets : chaque personne est un objet {nom, prenom, points} (slides 38, 39 et 40)
// const : constante (slide 51) ; le contenu du tableau reste modifiable (push, splice)
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
// Appel de la fonction init() (slide 45)
init();
// Déclaration d'une fonction sans paramètres (slide 45)
function init() {
    // Boucle for...of pour parcourir les objets du tableau (slide 44)
    for (const person of persons) {
        // Appel d'une fonction avec paramètres (slide 45) ; accès aux propriétés de l'objet avec le point (slide 39)
        doInsert(person.nom, person.prenom, person.points);
    }
}

// Déclaration d'une fonction avec paramètres (slide 45)
function doInsert(nom, prenom, points) {
    // Opérateur d'incrémentation ++ (slide 41)
    lignes++;
    // Déclaration d'une constante locale (slides 50 et 51)
    const num = lignes;

    // Ajouter les points au total
    // Opérateur combiné += (slide 41)
    total_points += points;

    doInsertRowTable(num, nom, prenom, points);

    // Mettre à jour l'espace résumé
    // Appel de la fonction update_summary() (slide 45)
    update_summary();
}

// Met à jour l'espace résumé (nombre de lignes + total des points)
// Déclaration d'une fonction sans paramètres (slide 45)
function update_summary() {
    // Retrouver un élément HTML par son identifiant : getElementById (slides 61 à 64)
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    // innerText : modifier le contenu de l'élément (slide 91) ; concaténation de chaînes avec + (slide 37)
    element_lignes.innerText = lignes + " ligne(s)";
    element_points.innerText = "Total point(s)= " + total_points;
}

// Fonction avec 4 paramètres, qui ne retourne rien (slide 45)
function doInsertRowTable(num, nom, prenom, points) {
    // Retrouver le tableau par son identifiant : getElementById (slides 61 à 64)
    const table = document.getElementById("table_persons");
    // Créer un élément HTML à partir de zéro : createElement (slide 104)
    const row = document.createElement("tr");

    // setAttribute : modifier la valeur d'un attribut, ici class (slides 106 et 107)
    row.setAttribute("class", "row");
    // Création des 5 cellules td avec createElement (slide 104)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    
    // Remplir le contenu de chaque cellule avec innerText (slide 91)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // Créer l'élément input (createElement, slide 104)
    const checkbox = document.createElement("input");
    // setAttribute : type = checkbox (slides 106 et 107)
    checkbox.setAttribute("type", "checkbox");
    // appendChild : rajouter un élément enfant à la fin (slides 103 et 104)
    col5.appendChild(checkbox);

    // Affecter les classes CSS aux cellules avec setAttribute (slides 106 et 107)
    col1.setAttribute("class", "col_num");
    col2.setAttribute("class", "col_S");
    col3.setAttribute("class", "col_S");
    col4.setAttribute("class", "col_num");
    col5.setAttribute("class", "col_chkbox");

    // Rajouter les cellules à la ligne avec appendChild (slides 103 et 104)
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

    // Rajouter la ligne au tableau appendChild (slides 103 et 104)
    table.appendChild(row);
}

// Lit le formulaire, contrôle la saisie, puis ajoute la personne
// Fonction exécutée au clic sur le bouton "Ajouter" (événement onclick, slides 129 à 135)
function doNewData() {
    // Retrouver les champs de saisie par leur identifiant : getElementById (slides 61 à 64)
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // .value : propriété accessible directement par son nom (slide 93)
    // trim() : méthode des chaînes, non vue dans le cours
    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
    // parseInt convertit le texte en entier (NaN si le champ est vide)
    // parseInt : conversion texte -> entier (non vue dans le cours, voir l'énoncé du TP)
    const points = parseInt(elt_points.value);

    // Saisie contrôlée : aucun champ ne doit être vide
    // Condition if...else (slide 42) ; opérateurs === et || (slides 41 et 141)
    // Number.isNaN : fonction donnée dans l'énoncé du TP (non vue dans le cours)
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // alert : pop-up, méthode de l'objet window du BOM (slide 116)
        alert("Formulaire incomplet !");
    } else {
        // Insertion dans le tableau HTML
        // Appel de la fonction doInsert avec les valeurs saisies (slide 45)
        doInsert(nom, prenom, points);

        // Insertion dans le tablea persons
        // push : ajouter un élément à la fin du tableau (slide 38) ; objet littéral (slide 39)
        persons.push({ nom: nom, prenom: prenom, points: points });

        // Vider les champs pour une autre saisie
        // Vider les champs : modification de la propriété value (slide 93)
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

// Fonction exécutée au clic sur le bouton "Console Tableau" (événement onclick, slides 129 à 135)
// Déclaration d'une fonction sans paramètres (slide 45)
function consoleTableau() {
    // Afficher le tableau dans la console avec console.log (slides 37 et 38)
    console.log(persons);
}