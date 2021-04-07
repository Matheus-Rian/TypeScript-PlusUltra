interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

//Type - Estou modelando um tipo
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
// Interface - Estou modelando uma forma.
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// Implements é para implementar um tipo a uma classe.
// Caso eu precise de encapsulamento(private ou protected) é melhor utilizar contratos(abstract) ao invës de type.
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
const pessoaObj: TipoPessoa2 = {
  nome: 'Matheus',
  sobrenome: 'Rian',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

const matheus = new Pessoa('Matheus', 'Rian');
console.log(matheus.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
