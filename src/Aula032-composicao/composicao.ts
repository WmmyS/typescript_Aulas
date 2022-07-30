export class Carro {
  private readonly motor = new Motor();

  ligar() {
    this.motor.ligar();
  }

  acelerar() {
    this.motor.acelerar();
  }

  parar() {
    this.motor.parar();
  }

  desligar() {
    this.motor.desligar();
  }
}

export class Motor {
  ligar() {
    console.log('O Motor está ligado...');
  }

  acelerar() {
    console.log('O Motor está acelerando...');
  }

  parar() {
    console.log('O Motor está parado');
  }

  desligar() {
    console.log('O Motor está desligado');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
