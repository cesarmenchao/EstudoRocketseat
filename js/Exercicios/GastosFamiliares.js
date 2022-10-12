// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e
// despesas e irá mostrar uma mensagem se a família está com
// saldo positivo ou negativo, seguido do valor do saldo.

let gastos = {
  receitas: [1200, 300, 550],
  despesas: [-1100, -200, -450],
};
CalculaGastos();
function CalculaGastos() {
  let totalReceitas = 0;
  let totalDespesas = 0;
  let total = 0;

  if (gastos.receitas.length > 0) {
    for (let i = 0; i < gastos.receitas.length; i++) {
      totalReceitas += gastos.receitas[i];
    }
  }
  if (gastos.despesas.length > 0) {
    for (let i = 0; i < gastos.despesas.length; i++) {
      totalDespesas += gastos.despesas[i];
    }
  }
  total = totalReceitas + totalDespesas;
  if (total > 0) {
    console.log("O seu saldo é positivo e é de " + total);
  } else if (total < 0) {
    console.log("O seu saldo é negativo e é de " + total);
  }
}
