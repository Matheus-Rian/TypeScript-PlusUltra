// Um método é basicamente uma function dentro de uma classe ou objeto.
// Void - Sem retorno(return)

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Matheus', 'Rian');

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Rian',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.exibirNome();
export { pessoa };
