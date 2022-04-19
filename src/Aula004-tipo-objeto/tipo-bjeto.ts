// Declarando desta forma estamos definindo os tipos das propriedades definidas além de deixar em aberto a quantidade de propriedades,
// porém os valores não são sugeridos pelo typescripts.
const objetoA: Record<string, unknown> = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoA.chaveA = 'Outrovalor';
objetoA.chaveS = 'Eu não fui declarado';

// Declarando o tipo das propriedades de outras formas, deixando em aberto a quantidade de propriedades.
const objetoB: {
  chaveA: string;
  readonly chaveB: string; // Esta chave é uma constante por causa do readyonly
  chaveC?: string; //Opcional
  [key: string]: unknown; //Deixando em aberto a quantidade de propriedades do tipo string.
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoB.chaveA = 'Valor';
objetoB.chaveD = 'Eu cai de paraquedas'; // Propriedade não declarada.

console.log(objetoA);
console.log(objetoB);
