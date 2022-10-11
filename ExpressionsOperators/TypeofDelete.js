/*
    Operadores Unarios 
    typeof
    delete
 */

const person = {
  name: "Cesar",
  age: 25,
  job: "Dev",
};

console.log(typeof person); // pega o tipo da variavel

delete person.job; // procura uma propriedade dentro do objeto e a deleta

console.log(person);
