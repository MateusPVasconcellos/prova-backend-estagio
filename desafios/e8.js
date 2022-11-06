const persons = [
    {
        id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42
    },
    {
        id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21
    },
    {
        id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28
    },
    {
        id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21
    },
];

const totalSum = persons.reduce((total, person) => total + person.idade, 0);

console.log('::Desafio 08:: ' + 'Total: ' + totalSum);