export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    //Outra forma de usar o setter
    this.cpf = _cpf;
  }

  // Modo antigo usado no JAVA por exemplo
  setCpf(valor: string): void {
    this._cpf = valor;
  }

  getCpf(): string {
    return this._cpf;
  }

  // Modo usado pelo typescript
  // Como os métodos get e set são considerados atributos eles estaão sendo considerados duplicados
  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf() {
    // Removendo o que não for número do cpf com as Expressões Regulares
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Wesley', 'Santos', 30, '386.568.485.-15');
console.log(pessoa);
pessoa.setCpf('56856565656');
console.log(pessoa.getCpf());

// Utilizando os getter e setter ts e js
pessoa.cpf = '526.158.126-59';
console.log(pessoa.cpf);
