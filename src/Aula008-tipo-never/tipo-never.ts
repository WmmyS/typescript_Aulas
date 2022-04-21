// O tipo never serve para lançarmos um erro ou quando a função é de um loop infinito
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

// Se a função for do tipo void é quase a mesma coisa
export function criaErro2(): void {
  throw new Error('Erro qualquer');
}

criaErro();
