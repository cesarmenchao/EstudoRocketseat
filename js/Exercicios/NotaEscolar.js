// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let Valor = 101
let NotaA =  Valor >=90 && Valor <= 100;
let NotaB =  Valor >=80 && Valor <= 89;
let NotaC =  Valor >=70 && Valor <= 79;
let NotaD =  Valor >=60 && Valor <= 69;
let NotaF =  Valor > 0  && Valor <= 60;

let NotaFinal
VericaNota(Valor)
function VericaNota(Valor){
    if (NotaA) {
        NotaFinal= 'A'
        console.log(NotaFinal)
    }else if (NotaB) {
         NotaFinal= 'B'
        console.log(NotaFinal)
    }else if (NotaC) {
         NotaFinal= 'C'
        console.log(NotaFinal)
    }else if (NotaD) {
         NotaFinal= 'D'
        console.log(NotaFinal)
    }else if (NotaF) {
         NotaFinal= 'F'
        console.log(NotaFinal)
    }else {
        console.log('Nota Invalida')
    }
    
}