const texto1 = " Olá, mundo";
const texto2 = 'Olá, mundo';
const senha = "senhaSuperSegura123";
const StringDeNumeros = "3456";

const citacao =' O Leo disse "oi!"';

console.log(citacao);

//concatenação de STRING (+)

console.log(texto1 + citacao);



//Transformação/conversão do código Unicode em caractere
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//Padronizando comparação de Strings
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
const palavraGrande = "pneumoultramicroscopicossilicovulcanoconiótico";
console.log(palavraGrande.length);