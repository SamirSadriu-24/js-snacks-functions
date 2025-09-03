/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function greetingsByHour (name){
    const ore = new Date().getHours();

    if (ore <= 13 && ore >= 6){
        return console.log("Buongiorno ", name);
    } else if (ore >13 && ore <= 17){
        return console.log("Buonpomeriggio ", name);
    } else{
        return console.log("Buonasera ", name);
    }
    
}

// Invoca la funzione qui e stampa il risultato in console
greetingsByHour(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.