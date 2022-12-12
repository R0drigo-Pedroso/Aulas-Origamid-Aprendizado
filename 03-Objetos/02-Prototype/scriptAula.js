function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.abracar = function () {
    return "Abraçou";
  };

  this.andar = function () {
    return "Andou pelo objeto";
  };
}

var obj = {
  nome: "rodrigo",
  idade: 30,
};

Pessoa.prototype.andar = function () {
  return this.nome + " Pessoa andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " Pessoa nadou";
};

const rodrigo = new Pessoa("Rodrigo", 30);

console.log(Pessoa.prototype);
console.log(rodrigo.prototype);

console.log("---------------------------------------");

/* Construtores Nativos */
const pais = "Brasil";
const cidade = new String("sp");
/* Caso eu queria de usar algum metodo do javaScript, posso pesquisar diretamente no console passado o metodo que eu querio por exemplo: "String.prototype" */

/* array */
const listaAnimais = ["Gato", "cachorro", "papagaio"];

const lista = document.querySelectorAll("li");

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log("---------------------------------------");

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
