// Quando colocamos o this precisamos especificar seu tipo nas propriedades porém ele não entra como argumento
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// Chamando a função o o .call especificando o this
funcao.call(new Date(), 'Wesley', 30);

// Chamando com .apply e especificando o this
funcao.apply(new Date(), ['Wesley', 30]);
