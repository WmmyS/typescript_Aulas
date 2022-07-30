type TipoPessoa = {
  nomeCompleto: () => string;
};

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

export class Pessoa implements TipoPessoa, TipoNome, TipoSobrenome {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Wesley', 'Santos');
console.log(pessoa.nomeCompleto());
