import pkg from 'axios';
const axios = pkg;

const CEP = '36038-400';

axios.get(`http://viacep.com.br/ws/${CEP}/json/`).then(
    (response) => console.log(`::Desafio 06:: ${response.data.logradouro}, ${response.data.bairro}, nº 8, ${response.data.localidade}/${response.data.uf}`.toLocaleUpperCase())
);