const nomes = ['elder', 'fausto', 'silva'];
nomes.pop();
console.log(nomes);

const nome = ['elder', 'fausto', 'silva', 'do', 'nascimento'];
const removido = nome.shift();
console.log(nome, removido);

nome.push('nascimento');
console.log(nome)

nome.unshift('joao');
console.log(nome)


console.log(nome.slice(1, -2));
