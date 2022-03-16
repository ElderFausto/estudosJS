const pessoa = {
    nome: 'elder',
    sobrenome: 'fausto',
    idade: 25,
    endereco: {
        rua: 'olinda',
        numero: 2022
    }
}

const {nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);