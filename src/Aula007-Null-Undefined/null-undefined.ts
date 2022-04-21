let x;

// Definindo do tipo undefined podemos atribuir qualquer tipo
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// Dois retornos na função
export function createPerson(
  // Tipo de propriedade
  firstName: string,
  lastName?: string, //Opcional
): {
  // Tipo de retorno da função
  firstName: string;
  lastName?: string; //Opcional
} {
  // Corpo da função
  return {
    firstName,
    lastName,
  };
}

// Verificar se o tipo da variável é do tipo number
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareofNumber = squareOf(2);

// O typescript entende que neste momento fizemos uma checagem para verificar o tipo da variável
if (squareofNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareofNumber * 2);
}
