/* Crie uma função construtora de Pessoas
Deve conter nome, sobrenome e idade
Crie um método no protótipo qyue retorne
o nome completo da pessoas
*/

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const rodrigo = new Pessoa("Rodrigo", "Pedroso", 30);

/* Liste os métoso acessados por dados criados com NodeList, HTMLCollection, Document */
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

/* Liste os construtores dos dados abaixo */
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // number
li.click(); //undefined

/* Qual o construtor do dado abaixo */
li.hidden.constructor.name;
//é uma "String"
