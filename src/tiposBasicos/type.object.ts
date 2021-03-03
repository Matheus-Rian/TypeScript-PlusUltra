// não utilize object e {} para tipar objetos.

const object: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  //   Quando eu não sei que chave vai vim eu posso fazer o seguinte:
  [key: string]: unknown; // Index signature
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

object.chaveA = 'Outro Valor';
object.chaveC = 'Outra Chave';
object.chaveD = 'Outra Chave';
