//callback function

function SayMyName(name){
    console.log('Antes do call back')
    name()
    console.log('depois do callback')
}

SayMyName(
    () =>{
        console.log('este é o callback')
    })