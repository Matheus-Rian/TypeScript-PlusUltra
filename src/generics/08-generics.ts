// Utility Types - Generics padrão no TS

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
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'idade' | 'nome'>;

const objeto2: PessoaRequired = {
  nome: 'Matheus',
  sobrenome: 'Souza',
  idade: 30,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type tipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'ddqwdsadasdwqdw22',
  nome: 'Matheus',
  idade: 18,
  sobrenome: 'Rian',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
// Module Mode
export default 1;
