// IIFE -> immediately invoked function expresion

 (function(idade, peso, altura) {

    const sobrenome = 'Fausto';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    } 

    function falaNome() {
        console.log(criaNome('Elder'));
    }

    falaNome();
    console.log(idade,peso, altura);

 })(25, 65, 1.75);