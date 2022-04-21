let x = 10 //eslint-disable-line
x = 0b1010; //eslint-disable-line

// Aqui estamos atribuindo o subtipo literal de const
const y = 10; //eslint-disable-line

// Abaixo é como se estivéssemos passando o tipo literal de const também
let b = 100 as const; //eslint-disable-line

// Colocando tipos literais em classes
const pessoa = {
  nome: 'Wesley' as const, // O tipo dessa variável deverá sempre ser a string 'Wesley'
  sobrenome: 'Santos',
};

// Quando formor atribuir o valor o typescript irá sugerir o valor 'Wesley'
pessoa.nome = 'Wesley';

// Aqui estamos falando que esta função só pode receber esas strings específicas
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

// Se tentarmos usar com outra string o typescript irá nos avisar
console.log(escolhaCor('Vermelho'));

// passar para o Module Mode
export default 1;
