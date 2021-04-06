// Composição: Um objeto tem outro objeto como parte dele.
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor ligado...');
  }

  desligar(): void {
    console.log('Motor desligado...');
  }

  acelerar(): void {
    console.log('Acelerando...');
  }

  freiar(): void {
    console.log('Freiando...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.freiar();
carro.desligar();
