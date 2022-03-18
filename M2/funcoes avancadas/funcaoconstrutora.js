// função construtora -> objetos
// função fabrica -> objetos
// construtora -> iniciar nome com letra maiscula

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ' sou eu');
  };
}

const p1 = new Pessoa('elder', 'fausto')
const p2 = new Pessoa('silva', 'nascimento')

console.log(p1.nome);
console.log(p2);

p2.metodo();