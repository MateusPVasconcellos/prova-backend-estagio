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

persons.sort((a, b) => {
    if (a.idade > b.idade) return 1;
    if (a.idade < b.idade) return -1;
    if (a.idade === b.idade && a.id > b.id) return 1;
    return 0;
});
console.log('::Desafio 11::');
console.log(persons);