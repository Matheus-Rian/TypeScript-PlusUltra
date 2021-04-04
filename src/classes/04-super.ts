//Super class/class mãe
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

// Sub classes/Classes filhas
export class Aluno extends Pessoa {
  constructor(
    // Valores que estou recebendo do super
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    //Criando valor para a class Aluno
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    // super é usado para acessar atributos e métodos da classe mãe
    const result = super.getNomeCompleto();
    return result + ' HEYYYYYY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Matheus', 'Rian', 18, '123.456.789-01', '01');
const cliente = new Cliente('Matheus', 'Rian', 18, '123.456.789-01');
const pessoa = new Pessoa('Matheus', 'Rian', 18, '123.456.789-01');
console.log(
  aluno.getNomeCompleto(),
  cliente.getNomeCompleto(),
  pessoa.getNomeCompleto(),
);
console.log(aluno);
