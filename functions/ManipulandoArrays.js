// criar array com construtor e sem metodo construtor

let array = ["a","b","c"] // sem metodo construtor

let OtherArray = new Array("a","b","c")

console.log(array,OtherArray)

//contar elementos de um array

console.log(array.length)


//transformar cadeia de caracteres em elementos de um array

let word = "manipulação"

console.log(Array.from(word)) // transforma a string em um array!!

let techs = ["html","css","js"]

//adicionar um item no final do array ou seja cria um novo item no fim

techs.push("nodejs")

//adicionar no inicio

techs.unshift("sql")

//remover do fim do array um item 

techs.pop()

//remover do inicio do array

techs.shift()

//pegar somente alguns elementos do array

// console.log(techs.slice(1,3))

//remover 1 ou mais items em qualquer posiçao do array

// techs.splice(1,1) //tira somete ele

//encontrar a posiçao de um elemento no array
let index = techs.indexOf('css')

console.log(index)
techs.splice(index,1)

console.log(techs)

