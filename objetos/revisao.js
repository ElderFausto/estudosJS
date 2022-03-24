function pessoa (nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
};

const p1 = new pessoa('elder', 'fausto');

console.log(p1);