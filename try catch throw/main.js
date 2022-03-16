function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw('x e y precisam ser numeros.');
    }

    return x = y;
}



try { // executa quando nao ha erros
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) { // executada quando nao ha erros
    console.log(error);
}