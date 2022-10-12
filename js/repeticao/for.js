// estrutura de repetiçao
//break para a execuçao do loop
// continue pula a execuçao

for (let i = 0; i < 10; i++) {
    console.log(i)
    if(i === 50){
        break
    }
}

for (let i = 10; i > 0; i--) { //ignora o 5
    if (i == 5) {
        continue;
    }
    console.log(i);
    
}

for (let i = 100; i > 0; i--) { //se o index for ighual a 50 para a repetiçao
    console.log(i)
    if(i === 50){
        break
    }
}

