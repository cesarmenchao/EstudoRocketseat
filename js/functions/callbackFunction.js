//callback function

function SayMyName(name) {
  // metodo que chama uma function e depois executa uma function dentro dela, como argumento para seu parametro
  console.log("Antes do call back");
  name();
  console.log("depois do callback");
}

SayMyName(() => {
  console.log("este é o callback");
});
