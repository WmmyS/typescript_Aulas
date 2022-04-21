let x: unknown;

x = 100;
x = 'Wesley';
x = 900;

const y = 800;

// O tipo unknown é parecido com o any, porém ele pede a verificação do tipo para executar uma ação

//Exmplo

// console.log(x + y);
// O typescript está pedindo para fazer a verificação do tipo antes de executar a terafa

//Para isso é necessário fazer uma verificação antes
// Exemplo
if (typeof x === 'number') console.log(x + y);
