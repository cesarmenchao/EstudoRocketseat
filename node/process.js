// lista de argumentos
console.log(process.argv); 
console.log('Seu nome é: ' + process.argv[2]+ ' ' + process.argv[3]);

//passando para literals

const FirstName = process.argv[2];
const LastName = process.argv[3];

console.log(`Seu nome é: ${FirstName} ${LastName}`);

//outra maneira

//node process --name "Cesar Menchao" --greeting "Tudo bem com voce"