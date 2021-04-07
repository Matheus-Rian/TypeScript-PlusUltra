// Implementando Type Alias em classes.
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

// Implements é para implementar um tipo a uma classe.
// Caso eu precise de encapsulamento(private ou protected) é melhor utilizar contratos(abstract) ao invës de type.
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const matheus = new Pessoa('Matheus', 'Rian');
console.log(matheus.nomeCompleto());
