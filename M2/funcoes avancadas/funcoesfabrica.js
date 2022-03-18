// factory function (função fabrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'estudando js') {
            return `${nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        get imc() { // getter faz fingir que o imc nao é uma função para que seja chamado
            // como um atributo ou metedo e nao função
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('elder', 'fausto', 1.75, 65);
console.log(p1.fala('falando sobre Js'));
console.log(p1.imc);
p1.nomeCompleto = 'elder silva nascimento'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())


