const pessoas = [
  {id: 3, nome: 'elder'},
  {id: 2, nome: 'fausto'},
  {id:1, nome: 'silva'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id, {...pessoa});
}
