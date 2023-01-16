/* Retorne um número aleatório
  Entre 1050 e 2000
*/

const numberAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numberAleatorio);

/* Retorne o maior número da lista abaixo */

const numberMarior = "1, 4, 9, 25, 48, 6";
const arrayNumeros = numberMarior.split(", ");
const numberResult = Math.max(...arrayNumeros);

console.log(numberResult);

/*- Crie uma função para limpar os preços
  - e retornar os números com centavos arredondados
  - depois retorne a soma total
*/

const listaPrecos = ["R$ 59,99", "R$ 100,222", "R$ 230,45 ", "r$ 200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

limparPreco(listaPrecos[1]);
