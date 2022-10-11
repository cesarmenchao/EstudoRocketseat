//Manipulando Dados

//Transformar um número quebrado com 2 casa decimis e trocar ponto por virgula

let number = 456.485498;

console.log(number.toFixed(2).replace(".", ","));

//transformar numero em string

let Name = "123";
console.log(Name);
console.log(Number(Name));

// Alterando letras de minusculas para maiscula ou vice e verse

let word = "Programar é muito bom";

console.log(word.toLocaleLowerCase());

/* Separe um texto que contem espaços,
 em um novo array onde cada texto é uma posição do array. 
 depois disso, transforme o array em um texto e onde eram espaços, coloque _ */

let phrase = "Eu quero viver o amor!";
let myArray = phrase.split(" "); // separa a string em array removendo os espaços ou qualquer parametro que for passado
console.log(myArray);
let phraseWithUnderscore = myArray.join("_"); //Retorna o dado em string juntando todas as posiçoes com underscore ou underline
console.log(phraseWithUnderscore);

// Verificar se o texto contém a palavra amor

let UnLove = "Eu quero viver!";
console.log(UnLove.includes("Amor")); // Verifica se a pavra amor está na frase e retorna true ou false

let OnLove = "Eu quero viver o Amor!";

console.log(OnLove.includes("Amor"));
