const stringTest = 'teste 1 de 2 string 3';
const stringReplace = '[removido]';

function replaceNumbers(string) {
    const newString = string.replace(/\d/g, stringReplace);
    return console.log('::Desafio 04:: ' + newString);
}

replaceNumbers(stringTest);