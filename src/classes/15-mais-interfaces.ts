// Declaration merging - As duas interfaces serão unidas para formar uma interface maior
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}
//

export const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Rian',
  enderecos: ['Av.Brasil'],
  idade: 18,
};

console.log(pessoa);
