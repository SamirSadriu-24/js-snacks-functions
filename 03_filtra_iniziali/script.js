/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const userInitial = prompt("Dammi una lettera: ");

console.log("Questa è la tua lettera scelta: " + userInitial)
console.log("I nomi con quella lettera presenti nel database sono: ")

function initialNames(names, userInitial,) {
    filtredNames = [];

    for (let i = 0; i < names.length; i++) {
        var namesInitial = names[i][0].toUpperCase();
        if (namesInitial === userInitial.toUpperCase()) {
            filtredNames.push(names[i]);
        }
    }
}
// Invoca la funzione qui e stampa il risultato in console
initialNames(names, userInitial);
console.log(filtredNames);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]