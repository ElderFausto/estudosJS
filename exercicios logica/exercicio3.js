/* 
Escreva uma função que recebe um numero e retorne:
numero é divisivel por 3 = fizz
numero é divisivel por 5 = buzz
numero é divisivel por 3 e 5 = fizzbuzz
numero NAO é divisivel por 3 e 5 = retorna o proprio numero
checar se o numero é realmente um numero
use a função com numeros de 0 a 100
*/

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log(fizzBuzz(100));