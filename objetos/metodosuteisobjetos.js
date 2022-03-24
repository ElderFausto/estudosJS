/* 
object.values
object.entries
object.assign(des, any)
object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

ja visto
object.keys (retorna chaves)
object.freeze (congela objeto)
object.defineProperties (define varias propriedades)
object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'copo', preco: 2.2};
const copo = produto;

copo.nome = 'caneca';
console.log(copo)