type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

// Isso só é possível fazer com type, com interface não funciona!
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoNomeCompletoInterface {
  nomeCompleto(): string;
}

interface TipoNomeInterface {
  nome: string;
}

interface TipoSobrenomeInterface {
  sobrenome: string;
}

// Isso funciona de forma idêntica ao tipo
interface TipoPessoaInterface
  extends TipoNomeInterface,
    TipoSobrenomeInterface,
    TipoNomeCompletoInterface {}

export class PessoaComTipo
  implements TipoPessoa, TipoNome, TipoSobrenome, TipoNomeCompleto
{
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class PessoaComInterface implements TipoPessoaInterface {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new PessoaComTipo('Wesley', 'Santos');
const pessoa2 = new PessoaComInterface('Wesley', 'Santos');
console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
