const firstString = 'A SmartNX é demais!!';
const secondString = 'Olá.';

function returnLongestString(string1, string2) {
    if (string1.length > string2.length) {
        console.log('::Desafio 01:: ' + string1);
    } else {
        console.log(string2);
    }
}

returnLongestString(firstString, secondString);