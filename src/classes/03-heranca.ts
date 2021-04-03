export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  getCpf(): string {
    return this.cpf;
  }

  getIdade(): number {
    return this.idade;
  }
}

//Herança relação de É ou um.
//Aluno é uma pessoa, gato é um animal...
export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Matheus', 'Rian', 18, '123.456.789-01');
const cliente = new Cliente('Matheus', 'Rian', 18, '123.456.789-01');
const pessoa = new Pessoa('Matheus', 'Rian', 18, '123.456.789-01');
console.log(
  aluno.getNomeCompleto(),
  cliente.getNomeCompleto(),
  pessoa.getNomeCompleto(),
);
