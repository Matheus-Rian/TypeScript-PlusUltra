//Decorators de params
function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
) {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}
export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorator nome: string,
    @decorator sobrenome: string,
    @decorator idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Matheus', 'Rian', 18);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
