// Duas possiveis utilizacoes: Em um loop infinito para travar sua aplicacao ou para lancar um erro.
export function criarError(): never {
  throw new Error('Errou');
}

criarError();

const loopInfinito = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
};
