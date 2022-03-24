// defineProperty -> getter e setters

function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: true, // pode alterar
    configurable: true // configuravel
  });
}

const p1 = new produto('camiseta', 20, 3);
console.log(p1);