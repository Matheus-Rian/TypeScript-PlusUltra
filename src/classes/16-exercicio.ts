export abstract class Developer {
  constructor(
    public name: string,
    public nivel: number,
    public dateBirthday: string,
    public stack: string[],
  ) {}

  abstract quantStack(): string;
  abstract messageBirthday(): string | undefined;
}

export class Thiago extends Developer {
  messageBirthday(): string | undefined {
    if (this.dateBirthday === '10/04') return 'Feliz aniversário!';
  }

  quantStack(): string {
    return this.stack.length > 5 ? 'Layout Quebrou' : 'Você não é o Thiago';
  }
}

const thiago = new Thiago('Thiago', 9, '10/04', [
  'Java',
  'TypeScript',
  'Ionic',
  'Swift',
  'Angular',
  'React',
  'Python',
]);

console.log(thiago.quantStack());
