export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta == null) {
      console.log(this._nome + ' não pode escrever, está sem ferramenta...');
    } else {
      this._ferramenta.escrever(this);
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  set nome(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  abstract escrever(escritor: Escritor): void;
}

export class Caneta extends Ferramenta {
  escrever(escritor: Escritor): void {
    console.log(`${escritor.nome} está escrevendo com a ${this.nome}`);
  }
}

export class Computador extends Ferramenta {
  escrever(escritor: Escritor): void {
    console.log(`${escritor.nome} está digitando com o ${this.nome}`);
  }
}

const escritor = new Escritor('Wesley');
const computador = new Computador('Dell I7');
const caneta = new Caneta('Faber Castel');

escritor.escrever();
escritor.ferramenta = computador;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
