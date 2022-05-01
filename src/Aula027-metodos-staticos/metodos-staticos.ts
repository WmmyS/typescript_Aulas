export class Pessoa {
  // propriedades estáticas
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // Padrão factory exemplo com métodos estáticos
  static build(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Wesley', 'Santos', 30, '386.568.485.-15');
pessoa.cpf = '526.158.126-59';

// Instanciar pessoa com o factory
const pessoa1 = Pessoa.build('José', 'Silva');

console.log(pessoa);
console.log(pessoa1);
