// Estrutura de dados náo ordenadas utilizada para quando temos varios valores e precisamos enumerar eles

enum Cores {
  Vermelho = 25, // 25
  azul = 50, // 50
  amarelo = 100, // 100
}

enum Cores {
  roxo = 'roxo',
  verde = 150,
  rosa,
}

console.log(Cores);
console.log(Cores.Vermelho);
console.log(Cores[100]);
// console.log(Cores[Vermelho])

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.verde);
