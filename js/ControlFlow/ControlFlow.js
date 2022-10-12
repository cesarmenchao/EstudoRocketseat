//throw

function sayMyName(name = "") {
  if (name === "") {
    throw "nome é necessário";
  }
  console.log(name)
}

console.log("depois do erro");
//try.....catch

try {                 // se nao utilizar o try a aplicaçao cracha e nao da continuidade no codigo
  sayMyName("");
} catch (e) {
  console.log(e);
}


console.log('apos o try')