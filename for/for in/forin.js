// for in -> lê os indices ou chaves do objeto

const frutas = ['maça', 'limao', 'uva', 'acerola'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(i);
}


const pessoa = [
    {idade: 25},
    {nome: 'elder'},
    {nascimento: 1996}
]

for (let i = 0; i < pessoa.length; i++) {
    console.log(i)
};

const pessoa = {
    idade: 25,
    nome: 'elder',
    nascimento: 1996
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);