"use strict";
//  mode strict
let lignes = 0;
// Tableau d'objets 
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
init();
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doInsert(nom, prenom, points) {
    lignes++;
    const num = lignes;

    doInsertRowTable(num, nom, prenom, points);
}
function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById("table_persons");
	const row = document.createElement("tr");
    row.setAttribute("class", "row");
	// Creation des 5 cellules 
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
    
	// Remplir le contenu de chaque cellule 
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
	 // Créer l'elément input
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.appendChild(checkbox);

    col1.setAttribute("class", "col_num");
    col2.setAttribute("class", "col_S");
    col3.setAttribute("class", "col_S");
    col4.setAttribute("class", "col_num");
    col5.setAttribute("class", "col_chkbox");

  // Rajouter les cellules à la lignes 
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);

// Rajouter la ligne au tableau
    table.appendChild(row);
}
function consoleTableau() {
    console.log(persons);
}
