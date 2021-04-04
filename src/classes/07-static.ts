//Super class/class mãe
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  methodNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  /* membros estáticos de uma classe,
  aqueles que são visíveis na própria classe(Pessoa) em vez de nas instâncias. */
  static falaOi(): void {
    console.log('OI');
  }

  static criarPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const instanciaPessoa = new Pessoa('Matheus', 'Rian', 18, '123.456.789-01');
instanciaPessoa.nome = 'Rian';
console.log(instanciaPessoa);
Pessoa.falaOi(); // Acessando o method static pela class
const staticPessoa = Pessoa.criarPessoa('Rodrigo', 'Vanderlei');
console.log(staticPessoa);
instanciaPessoa.methodNormal();
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
