try {
    console.log('abri um arquivo');
    console.log('manipulei um arquivo e gerou erro');
    console.log('fechei o arquivo');
} catch (e) { // executado quando ha erros
    console.log('tratando o erro');
} finally { // sempre vai ser executado
    console.log('eu sempre sou executado');
}