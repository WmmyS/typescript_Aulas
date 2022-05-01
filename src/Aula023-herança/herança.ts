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
  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
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
const aluno = new Aluno1('Wesley', 'Santos', 30, '000.000.000-00');

// Herança de atributos e métodos da classe pessoa
export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno.getNomeCompleto());
