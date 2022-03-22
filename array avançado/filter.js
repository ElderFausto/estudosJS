const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* function callBackFilter(valor) {
  return valor > 10;
}

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados); */

const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

// filter -> sempre retornar um array, com a mesma quantidade de elementos 
// ou menos

const pessoas = [
  {nome: 'silva', idade: 62},
  {nome: 'elder', idade: 25},
  {nome: 'fausto', idade: 40},
  {nome: 'nascimento', idade: 70},
  {nome: 'joy', idade: 50},
  {nome: 'evaldo', idade: 60}
];

const nomeGrande = pessoas.filter(obj => obj.idade.length >= 3);

const maior50 = pessoas.filter(obj => obj.idade >= 50);

const terminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
})

console.log(terminaComA);


