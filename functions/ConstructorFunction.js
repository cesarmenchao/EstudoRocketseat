/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person (name){
    this.name = name
    this.walk = function() {
         return this.name + " Está andando"
    }
}

const cesar = new Person('Cesar')
const mari = new Person('Mari')
console.log(cesar.walk())

let data = new Date('2022-10-03')
let teste = new String()
console.log(data)
