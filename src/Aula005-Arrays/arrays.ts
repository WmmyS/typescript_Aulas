// Array<T> = generics || T[] - pelo tipo
// Export foi inserido para utilizarmos o module mode para exportar a função
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// Com reduce estamos percorrendo  coleção e gerando algum valor final encima dela para um único valor ou produto
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

// Com o map estou gerando valores alterados emcima dos valores que a coleção tem com a mesma quantidade sem alterar a coleção recebida
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upperCase);
