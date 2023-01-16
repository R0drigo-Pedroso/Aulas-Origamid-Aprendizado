/* Tudo sobre o number */

console.log(Number.isNaN());

console.log(Number.isInteger(10.6));

console.log(parseFloat("100"));
console.log(parseInt(35.9));

/* n.toFixed(decimais) */

const preco = 2.99878455;
console.log(preco.toFixed(3));

/* transforma em moeda
 *toLocaleString(lang, options)
 */

let valor = 29.45;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(valor);

/* Math */
console.log(Math.PI);

/*  */
const aleatorio = Math.random() * 10;

console.log(aleatorio);

/* Uma boa forma de montar o jogo da loto facil e mega sena */
const jogoLotoFacil = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
console.log("Anote Cada numero gerado aleratoriamente: " + jogoLotoFacil);

/* Uma boa forma de montar o jogo da loto facil e mega sena */
const jogoMegaSena = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
console.log(jogoMegaSena);
