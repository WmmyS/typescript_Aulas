// Podemos pedir um retorno de u tipo porém em alguns casos esse tipo pode ser null ou de outro tipo dependendo da situação
//Exmplo:

/*Recomendados*/

// Vou utilizar o dom para filtrar um objeto e conferir se ele foi capturado para executar uma ação
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Informar que temos certeza que irá retornar um determinado tipo
// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background == 'red';

// O InteliJ irá auxiliar nos tipos de retorno do element
// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Teste';
input.focus();

/*Não Recomendados*/

// Outra forma que é possível utilizar é:
// Trocar o tipo informando unknown depois atribuindo outro tipo
// Type assertion
const body4 = document.querySelector('body') as unknown as number;
body4.toPrecision(1);

// Outra forma que existe más NÃO RECOMENDADA seria
// Non-null assertion (!)
// const body2 = document.querySelector('body')!;
// body2.style.background = 'red';
