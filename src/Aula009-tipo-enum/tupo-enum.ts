enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
  ROXO = 100,
  // Caso eu coloque uma string detron do enum o próximo item a ser
  // colocado precisa ser inicializado, se for integer não precisa
  CIANO = 'CIANO',
  ROSA = 50,
  // Neste item LARANJA o enum assume um número sequencial base no número anterior
  LARANJA,
}

// É possível unificar os dois enums criando outro enum com o mesmo nome
enum Cores {
  VERDE = 52,
}

console.log(Cores.VERMELHO);
console.log(Cores.AZUL);
console.log(Cores.AMARELO);
console.log(Cores.ROXO);

// Imprimindo o enum unificado
console.log(Cores);

// Função para retornar valores de enums
//                        item  Lista   retorno
export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

//Selecionar o valor da cor
escolhaCor(1);

// Infelizmente o enum permite um erro do tipo que digitando um
// número que não exista no enum ele simplesmente não retorna nada

//Exmplo
escolhaCor(1080);
// Retorno: undefined
