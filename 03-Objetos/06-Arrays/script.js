/* 
Remova o primeiro valor de comidas e coloque em uam vaciável
Remova o ultimo valor de comidas e coloque em uma variável
Adicione "Arroz" ao final da lista da array
Adcione Peixe
*/
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

const primeiraValor = comidas.shift();
const ultimoValor = comidas.pop();
comidas.push("Arroz");

console.log(comidas);

const estudantes = ["Marcio", "Joana", "Brenda", "João"];
/* 
Arrume os estudantes e ordem Alfabeticas 
Inverta a ordem dos estudantes
verifique se Joana faz parte dos alunos
Verifique se Juliana faz parte d  
*/

estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Rebeca"));

let html =
  "<section><div>sobre</div><div>Produtos</div><div>Contato</div></section>";

html = html.split("section").join("ul").split("div").join("li");

console.log(html);

const carros = ["Fond", "fiat", "vw"];

const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);
