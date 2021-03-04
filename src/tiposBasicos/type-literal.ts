let x = 10; //eslint-disable-line
x = 11;

const y = 10; // Tipo literal. 10 é um sub tipo de number. Pois const não pode ter seu valor alterado

let a: 100 = 100 as const; //eslint-disable-line
// as - como

const person = {
  pessoa: 'Matheus' as const,
  age: 18,
};

person.pessoa = 'Matheus';

function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Amarelo') {
  return cor;
}
console.log(escolhaCor('Amarelo'));

// Module mode
export default 1;
