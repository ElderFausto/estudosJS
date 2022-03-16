const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

for (let i = 0; i < elementos.length; i++) {
    // console.log(elementos[i].tag);
    let {tag, texto} = elementos[i];
    console.log(tag);
};