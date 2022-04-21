// Criando um tipo para ser utilizado
// Tipos começam com a letra Maiúscula
type Idade = number;

// Criando um objeto e typando
type Pessoa = {
  nome: string;
  // A propriedade idade é do tipo idade que criamos anteriomente
  idade: Idade;
  salario: number;
  corPreferida?: string; //Opcional | pode ser vazio
};

// Utilizando tipos literais para unir dois tipos
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

// Unindo os dois tipos declarados anteriormente
type CorPreferida = CorRGB | CorCMYK;

// Instanciando um objeto Pessoa com valores
const pessoa: Pessoa = {
  idade: 30,
  nome: 'Wesley',
  // Podemos inserir números assim:
  salario: 300_000,
};

// Criando uma função que atribui cor preferida para um objeto pessoa
export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  //Colocando ... 'reticências' e o objeto estamos dizendo que estamos recebendo um objeto já com rporpiedades definidas
  // Iremos alterar apenas a cor com o tipo inferido
  return { ...pessoa, corPreferida: cor };
}

// Imprimir a atribuição cor para a pessoa
console.log(setCorPreferida(pessoa, 'Azul'));

console.log(pessoa); // Objeto original
