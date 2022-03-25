class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  fala() {
    console.log(`${this.nome} esta falando`)
  }
}

const p1 = new Pessoa('elder', 'fausto');
console.log(p1);
p1.fala();