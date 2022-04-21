// Type alias
//tipo | nome             | tupo entrada |   saída
type MapStringsCallback = (item: string) => string;

// Declaramos que o tipo de retorno da função callbackfn é um array de strings
export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  //Percorrendo o for para executar a tarefa atribuindo para um novo array
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

// Array para testar a função
const abc = ['a', 'b', 'c'];

// Estamos colocando a função dentro da função mapStrings com arrow function
const abcMapped = mapStrings(abc, (item) => item.toLowerCase());

// Array original
console.log(abc);

// Array alterado
console.log(abcMapped);
