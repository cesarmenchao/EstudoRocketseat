// function expression
// function anonymous

//parametros
const sum = function(numer1, number2){// passando parametros a ser cumpridos dentro de uma functions

   let resultado = numer1 + number2
    return resultado
}

let number1 = 2
let number2 = 3
sum(number1,number2) // argumentos referente aos parametros

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)



console.log(`a soma entre eles é de ${sum(number1,number2)}`)