const person = {
    'nome': 'Dev',
    'sobrenome': 'smart',
    'idade': '26',
    'cargo': 'analista de sistemas',
    'documento': '123.345.678-90'
};

const newPerson = JSON.stringify((({ documento, ...obj }) => obj)(person));

console.log('::Desafio 12:: ');
console.log(newPerson);