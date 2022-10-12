// for in cria um loop em cima de um objeto

let person = {
  name: "cesar",
  age: 25,
  weight: 88,
};

for(let property in person){
    console.log(property)
    console.log(person[property]) // pega a property da person e a conmverte para exibir na tela
}
