//Super class/class mãe
export class Pessoa {
  constructor(
    private _nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {
    // Chamando o set de uma maneira mais simples
    this.nome = _nome;
  }

  // ! forma antiga. Comportamento como de um method
  setCpf(valor: string): void {
    this.cpf = valor;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  // ? Forma nova. Comportamento como de um atributo
  set nome(novoNome: string) {
    console.log('SETTER CHAMADO');
    this._nome = novoNome;
  }

  get nome(): string {
    console.log('GETTER CHAMADO');
    return this._nome;
  }
}

const pessoa = new Pessoa('Matheus', 'Rian', 18, '123.456.789-01');
pessoa.setCpf('123.456.789-00');
console.log(pessoa.getCpf());
// * Quando é colocado o recebe(=) estou chamando o atributo de set do nome.
pessoa.nome = 'Rian';
// * Quando eu querer apenas acessar o valor de nome é chamado o atributo de get do nome.
console.log(pessoa.nome);
