// exercicios 
//01 declare uma variavel de nome weight
// R:
// let weight

// 02 Que tipo de dado é a variavel acima?
// console.log(typeof weight)

// R: undefined

// 03 declare uma variavel e atribua valores para cada um dos dados:
// let name = cesar
// let age = 25
// let stars = 2.8
// let isSubscribed = true

//04  a variavel student abaixo é de que tipo de dado?
// R: Object

// 04.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

let student = {
    name: 'cesar', 
    age: 25 ,
    stars: 2.8 ,
     isSubscrabed: true
};

// 04.2 mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <weight> kb.
    
console.log(`${student.name} de idade ${student.age} pesa ${student.stars}`)

// 05 declare uma variavel do tipo array de nome students e nao atribua valor nenhum
let students = []

// 06 reatribua valor para a variavela acima, colocando dentro dela o object da questao 4

students = [
    student
]

console.log(students[0])

// 8 crie um novo student e coloque na posiçao 1 do array students 

const mari = {
    name: 'mari',
    age:23,
    stars:76,
    isSubscrabed: false
}
students[1] = mari

// 09 sem rodar o codigo responda qual e a resposta do codigo abaixo e por que?

console.log(a)
var a = 1
//  R: vai receber undefied, por ser uma variavel do tipo var ele sofre uma elpevaçao