// argumentos que sustenta todos dos argumentos enviados

/* function funcao(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e);
}

funcao(1, 2, 3);



function funcao(a, b = 2, c = 1) {
    console.log(a + b + c);
}

funcao(2, 3); */



/* function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

funcao({nome: 'elder', sobrenome: 'fausto', idade: 25}); */


/* function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'elder', sobrenome: 'fausto', idade: 25}
funcao(obj); */


/* function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['elder', 'fausto', 'silva'])
 */

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

conta('+', 1, 20, 30, 40, 50)