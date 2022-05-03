export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem) {
    console.log(`Personagem ${this.nome} atacando: `);
    this.grito();
    personagem.perderVida(this.ataque);
  }

  perderVida(ataque: number) {
    this.vida -= ataque;
    console.log(
      `Personagem ${this.nome} agora tem ${this.vida} pontos de vida`,
    );
  }

  abstract grito(): void;
}

export class Paladino extends Personagem {
  grito(): void {
    console.log('👨‍🦱 Ao ataaaaqueee !!!');
  }
}

export class Troll extends Personagem {
  grito(): void {
    console.log(`😈 Atacaaaaaar  agrrrrrr!!!`);
  }
}

const paladino = new Paladino('Paladinho', 27, 100);
const troll = new Troll('Troll', 29, 95);

paladino.atacar(troll);
troll.atacar(paladino);
paladino.atacar(troll);
troll.atacar(paladino);
paladino.atacar(troll);
troll.atacar(paladino);
