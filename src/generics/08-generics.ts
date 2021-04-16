// Record
const objeto1: Record<string, string | number> = {
  nome: 'Matheus',
  sobrenome: 'Souza',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
  nome: 'Matheus',
  sobrenome: 'Souza',
  idade: 30,
};

console.log(objeto2);

// Module Mode
export default 1;
