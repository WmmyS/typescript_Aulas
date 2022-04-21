// É possível inferir mais de um tipo para resposta de uma função
function addOrConcat(
  // Propriedades de entrada da função
  a: number | string,
  b: number | string,
  // Retorno da função
): number | string {
  //Conferência para mostrar para o typescript que sabemos o que estamos fazendo
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // Se não colocarmos a linha abaixo ele assume o retorno também pode ser undefined
  return `${a}${b}`;
  // Nesta linha estamos evidenciando que se não for número concatene os valores como strings
}

// Portanto
console.log(addOrConcat(10, 20)); //Retorna número 30
console.log(addOrConcat('10', '20')); // concatena os strings
console.log(addOrConcat(10, '20')); // concatena os valores
console.log(addOrConcat('10', 20)); // concatena os valores

// Para isso ser possível devemos incluir o boolean na entrada da função
// console.log(addOrConcat(true, true));

// assim:
function outroAddOrConcat(
  // Propriedades de entrada da função
  a: number | string | boolean,
  b: number | string | boolean,
  // Retorno da função
): number | string {
  //Conferência para mostrar para o typescript que sabemos o que estamos fazendo
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // Se não colocarmos a linha abaixo ele assume o retorno também pode ser undefined
  return `${a}${b}`;
  // Nesta linha estamos evidenciando que se não for número concatene os valores como strings
}

// Agora sim é possível
console.log(outroAddOrConcat(true, true)); //Concatena a escrita de valores true
