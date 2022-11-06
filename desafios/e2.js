const firstString = 'Vamos programar!!';
const secondString = 'Olá.';

function returnLongestString(string1, string2) {
    if (string1.length > string2.length) {
        console.log('::Desafio 02:: ' + string1);
    } else {
        console.log(string2);
    }
}

function e2function(returnLongest, string1, string2) {
    return returnLongest(string1, string2);
}

e2function(returnLongestString, firstString, secondString);