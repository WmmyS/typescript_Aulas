//Tuple
const dadosCliente1: [number, string, string] = [1, 'Wesley', 'Santos'];
const dadosCliente2: [number, string, string] = [1, 'Wesley', 'Santos'];
const dadosCliente3: [number, string, string?] = [1, 'Wesley'];

// Propriedades que podem ser inseridas com o rest operator
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Wesley',
  'Santos',
  'Outras',
  'Palavras',
  'Mais',
];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Wesley';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readyonly array
const array1: readonly string[] = ['Wesley', 'Santos'];
const array2: ReadonlyArray<string> = ['Wesley', 'Santos'];

console.log(array1);
console.log(array2);
