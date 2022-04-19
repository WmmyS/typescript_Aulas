// args é um rest operator e e um array
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Wesley',
  sobrenome: 'Santos',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Wesley', 'Santos');
pessoa.exibirNome();

// Para conseguir declarar o objeto criado pessoa é necessário fazer o export
export { pessoa };
