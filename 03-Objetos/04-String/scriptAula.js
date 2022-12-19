// const comida = "Pizza";
// const agua = new String("Agua");

// // console.log(agua.length);

// const frase = "a melhor comida";
// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(5));

const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseFinal = frase.concat(linguagem, "!!!");

console.log("--------------------------------------");

const fruta = "Banana";
const listaFrutas = "Melão, Laranja, Pera";

console.log(fruta.includes(listaFrutas));

console.log(fruta.endsWith("na"));

console.log("--------------------------------------");

const transacao1 = "A melhor lorem da vida ";
const transacao2 = "A melhor linguagem é linguagem é ";
const transacao3 = "A melhor linguagem é linguagem é linguagem é ";

console.log(transacao1.slice(3));
/* Posso ultilizar numero nagativo */

console.log(fruta.indexOf("n"));

const listaPreco = ["R$ 99", "R$ 199", "R$ 12000"];
listaPreco.forEach((preco) => {
  console.log(preco.padStart(10, "-"));
});

// repetição
const fraseUni = "ta";
fraseUni.repeat(5);

/* substituição */
let listaItens = "Item01 Item02 Item03 Item04 Item05";
listaItens = listaItens.replace(/[ ]+/g, ", ");

console.log(listaItens);

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div>O melhor item</dvi><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);
