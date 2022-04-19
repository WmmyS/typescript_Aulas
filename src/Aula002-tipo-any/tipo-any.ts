/* Utilizar o any apenas em último caso, caso o tipo não seja explicitamente colocado,
sua função será atruído o valor de retorno para any também */
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('1, 2, 3'));
console.log(showMessage(1));
