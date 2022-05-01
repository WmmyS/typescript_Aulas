export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// Herança de atributos e métodos da classe pessoa

export class Aluno1 extends Pessoa {
  // Alterando o constructor da classe filha

  constructor(
    // Valores do construtor da classe extendida
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,

    // Novo valor para a classe filha
    public sala: string,
  ) {
    //Preenchendo o construtor da classe pai
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo alguma coisa antes');
    return super.getNomeCompleto();
  }
}

// Herança de atributos e métodos da classe pessoa
export class Cliente1 extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Wesley', 'Santos', 30, '000.000.000-00');
const cliente = new Cliente1('Wesley', 'Santos', 30, '000.000.000-00');
const aluno = new Aluno1('Wesley', 'Santos', 30, '000.000.000-00', '2º B');

// Herança de atributos e métodos da classe pessoa
export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno.getNomeCompleto());
