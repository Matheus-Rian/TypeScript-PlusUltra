// Generics com interfaces e Type Alias

interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Matheus',
  sobrenome: 'Rian',
  idade: 18,
};

const aluno1: PessoaProtocolo<number, number> = {
  nome: 2,
  sobrenome: 2,
  idade: 18,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Rian',
  sobrenome: 'Matheus',
  idade: 18,
};

console.log(aluno);
console.log(aluno1);
console.log(aluno2);
