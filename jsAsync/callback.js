function imprimirDado(dado){
    console.log(dado())
}

imprimirDado(function(){
    return 'Ola mundo'
})