// Estrutura de dados náo ordenadas utilizada para quando temos varios valores e precisamos enumerar eles

enum Cores {
  Vermelho = 25, // 25
  azul = 50, // 50
  amarelo = 100, // 100
}

enum ColorsHeterogeneous {
  White = 'White',
  Pink = 300,
}

// console.log('Rosa', ColorsHeterogeneous.rosa);

enum ColorsNum {
  Red = 130,
  Green = 90,
}

// Acessando os dados do Enum (Numbers)
ColorsNum.Green;
console.log(ColorsNum['Green']);
console.log(ColorsNum[130]);

enum ColorsHexadecimal {
  Black = '#000',
  Blue = '#0000FF',
}

// Acessando os dados do Enum (String)
ColorsHexadecimal.Black;
ColorsHexadecimal['Black'];

console.log(Cores.Vermelho);
console.log(Cores[100]);
// console.log(Cores[Vermelho])

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

// escolhaCor(Cores.verde);
