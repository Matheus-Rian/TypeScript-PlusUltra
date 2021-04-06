// Associaçào fraca: O escritor não depende de uma ferramenta.
// A classe não depende uma da outra para funcionar.
export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta) return this._ferramenta.escrever();
    console.log('Náo posso escrever sem ferramenta.');
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class Maquina extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor = new Escritor('Matheus');
const caneta = new Caneta('Bic');
const maquina = new Maquina('Maquina');

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.ferramenta = null;
escritor.escrever();
console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);
