function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa = criaPessoa('elder', 'fausto', 25);
console.log(pessoa.nome) // console.log(pessoa)  

/* 
primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

referencia (mutavel) - array, object, function
*/