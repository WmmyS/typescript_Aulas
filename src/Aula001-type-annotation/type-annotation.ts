/*eslint-disable*/

//Tipos básicos (aqui ocorre inferência de tipos e a correção pelo eslint)
let nome: string = 'Wesley'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010;  // 10, 1.57, -5.55, 0xff00d, ob1010, 0o7744
let adulto: boolean = true;  // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n;    // bigint - Por não estarmos fazendo target para ES2020 no eslint ele irá reclamar dessa variável

// Tipos passados por referência - Type Annotation
// Array
// Tipo generics
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];

//Outra maneira de declarar o array menos indicada
let anotherArrayNumbers: number[] = [1, 2, 3]
let anotherArrayStrings: string[] = ['a', 'b', 'c'];

// Objetos - definindo tipos do objeto
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30, nome: 'Wesley', adulto: undefined //por ter o ? na declaração da propriedade adulto, o valor é opcional
};

//Funções
function soma(x: number, y: number){
    return x + y;
}

// O tipo inferido para a variável passando o mouse acima da variável irá indicar o valor inferido por causa do tipo de reultado a função.
const result = soma(2, 2);

//Outra forma de declarar a função com arrow function
//            Tipos de valores    -   retorno   -  propriedades  -  execução da função
const soma2: (x: number, y: number) => number =    (x, y)          => x + y;

