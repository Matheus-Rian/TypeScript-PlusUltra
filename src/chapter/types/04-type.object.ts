// não utilize object e {} para tipar objetos.

const object: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  //   Quando eu desconheço a chave e o valor, eu posso fazer o seguinte:
  [key: string]: unknown; // Index signature
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

object.chaveD = 'Outra Chave';

// object.chaveD.toUpperCase();

if (typeof object.chaveD === 'string') {
  console.log(object.chaveD.toUpperCase());
}
