// Não conseguimos criar uma instância de uma classe abstract
// As classes abstratas são classes básicas das quais outras classes podem ser derivadas.
export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.falaAtaque();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida}hp`);
  }

  // Os métodos em uma classe abstrata marcados como abstratos não contêm
  // uma implementação e devem ser implementados em classes derivadas.
  abstract falaAtaque(): void;
}

export class Ninja extends Personagem {
  protected emoji = '\u{1F9DD}';
  falaAtaque(): void {
    console.log(this.emoji + ' RASEGANNNN');
  }
}
export class Pirata extends Personagem {
  protected emoji = '\u{1F9DF}';
  falaAtaque(): void {
    console.log(this.emoji + ' GOMU NO GOMU');
  }
}

const naruto = new Ninja('Naruto', 300, 500);
const luffy = new Pirata('Luffy', 300, 600);
naruto.atacar(luffy);
naruto.atacar(luffy);
luffy.atacar(naruto);
