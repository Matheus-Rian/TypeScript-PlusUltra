// Composição de Decorators

interface Constructor {
  new (...args: any[]): any;
}
function inverteNomeECor(param1: string, param2: string) {
  // Clousure
  return function (target: Constructor) {
    console.log('Sou o decorator e recebi', target);
    return class extends target {
      cor: string;
      nome: string;
      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return `${valor.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}
function outroDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro Decorator ' + param1);
    return target;
  };
}

@outroDecorator('O parâmetro do outro Decorator')
@inverteNomeECor('Valor1', 'Valor2') // Chamado na criação da classe
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Matheus', 'roxo');
console.log(animal);
