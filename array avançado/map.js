const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);


const pessoas = [
  {nome: 'silva', idade: 62},
  {nome: 'elder', idade: 25},
  {nome: 'fausto', idade: 40},
  {nome: 'nascimento', idade: 70},
  {nome: 'joy', idade: 50},
  {nome: 'evaldo', idade: 60}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));

const ids = pessoas.map(function(obj, indice) {
  const newObj = {...obj};
  newObj.id = indice;
  return newObj;
});

console.log(ids);