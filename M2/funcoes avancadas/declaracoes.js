// declaracao de funcao (function hoistiing)

falaOi();
function falaOi() {
    console.log('oi');
}

//  first-class objectc (objetos de primeira classe)
// function expression

const souUmDado = function() {
    console.log('Sou um dado.');
}

// arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// dentro de um objeto

const obj = {
    fala() {
        console.log('estou falando...')
    }
};
obj.fala();