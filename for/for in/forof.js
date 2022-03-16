const nome = 'elder'

for (let i =0; i < nome.length; i++) {
    console.log(nome[i]);
};

for (let i in nome) {
    console.log(nome[i]);
}


for (let valor of nome) {
    console.log(valor);
}

// for classico - geralmente com iteraveis (array ou strings)
// for in - retorna indicie ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)