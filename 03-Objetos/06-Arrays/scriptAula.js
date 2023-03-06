/* const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],

  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array("Ford", "GM", "Fiat", "Honda");

carros[2] = "Ferrari";
carros[3] = "Kia";
carros[20] = "Kia";

console.log(carros.length);

const li = document.querySelectorAll("li");

const arrayLi = Array.from(li);

const obj = {
  0: "Rodrigo",
  1: "teste 01",
  4: "teste 02",
  length: 4,
};

const objArray = Array.from(obj);

console.log(li);
console.log(arrayLi);

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

console.log(frutas[2][0].length);

const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();
console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
console.log(idades);

 */

// const carros = ["Ford", "GM", "Fiat"];
// carros.unshift("kia");
// carros.push("VW", "Carro");

// // console.log(carros);
// // console.log(carros.pop());
// // console.log(carros.shift());
// console.log(carros);
// console.log(carros.splice(2, 0, "fusca"));

// console.log(carros);

// const transporte1 = ["Barco", "Aviao"];
// const transporte2 = ["Carro", "Moto"];

// const transporte = transporte1.concat();

// let htmlString = "<h2>TItulo Principal";
// htmlString = htmlString.split("Titulo principla<h2>");
// console.log(htmlString);
// htmlString = htmlString.join("h3");

const linguagens = ["html", "css", "js"];

const cloneLinguagem = linguagens.slice();

console.log(linguagens.pop());
console.log(linguagens);
