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

const age25 = (person) => person.idade < 25;
const some = persons.some(age25);

if (some === true) {
    console.log('::Desafio 09:: ');
    console.log(persons);
};