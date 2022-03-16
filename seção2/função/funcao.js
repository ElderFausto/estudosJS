function saudacao(nome) {
    console.log(`bom dia! ${nome}`);
};

saudacao('elder');

function soma(x, y) {
    resultado = x + y;
    return resultado;
}

console.log(soma(3, 3));


// function arrow
const some = n => n ** 0.5;
console.log(some(9));