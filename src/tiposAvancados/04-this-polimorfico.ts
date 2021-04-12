export class Calculadora {
  constructor(public number: number) {}

  // this retorna a instância(this.number)
  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.number **= n;
    // O this é da SubCalculadora
    return this;
  }
}
const calculadora = new SubCalculadora(2);
// Chamadas em cadeia
calculadora.add(1).mult(2).div(2).sub(1).pow(2); // Só é possivel porque está sendo retornado this
console.log(calculadora);

// Builder - GOF
type Method = 'get' | 'post' | null;
type Url = string | null;

export class RequestBuilder {
  private method: Method = null;
  private url: Url = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('http://www.google.com').setMethod('post').send();
