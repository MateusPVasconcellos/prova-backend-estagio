const dicionary = {
    'a': 4, 'e': 3, 'i': 1, 's': 5,
};

let string = 'T35t3 d3 35t4g1o';
const keys = Object.keys(dicionary);
const values = Object.values(dicionary);

for (let i = 0; i < keys.length * 2; i += 1) {
    string = string.replace(`${values[i]}`, keys[i]);
}
console.log('::Desafio 05:: ' + string);