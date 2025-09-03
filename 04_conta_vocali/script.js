/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowelsFinder (word){
    let vowels = ["a", "i", "u", "e", "o"];
    var vowelsInCommon = []
    for (i = 0; i < word.length; i++){
        if (vowels.includes(word[i])){
           vowelsInCommon.push(word[i]);
        }
    }
    return vowelsInCommon;
}

// Invoca la funzione qui e stampa il risultato in console
vowelsFinder(word);
console.log(word, ": ", (vowelsFinder(word)));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)