// Este tipo serviria para definirmos um objeto por exemplo com tipos
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// Maneira errada de utilizar más possível de união de propriedades
// type PessoaErrado = TemNome | TemSobrenome | TemIdade;
// No formato acima deixa as pripriedades do objeto opcionais

// Maneira recomendável de utilizar com o intersection
type Pessoa = TemNome & TemSobrenome & TemIdade;
// As 3 propriedade precisam ser definidas

const pessoa: Pessoa = {
  nome: 'Wesley',
  sobrenome: 'Santos',
  idade: 30,
};

console.log(pessoa);

// Module mode
export { pessoa };

// Uma opção para possível utilização
// Intersecção de dois tipos
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

// se unirmos esses tipos o tipo em comum entre ele será obrigatório
type Interseccao = AB & AC & AD;

const exemplo: Interseccao = 'A';

console.log(exemplo);

export { exemplo };
