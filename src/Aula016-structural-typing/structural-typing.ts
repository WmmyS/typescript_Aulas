// Tipagem estruturada

// No type script a tipagem se preocupa com a estrutura do objeto, ou seja as propriedade em si
// e não necessariamente com o tipo do abjeto em si

//Exemplo
// Estamos criando um tipo de uma função que recebe dois valores do tipo User e retorna boolean
type VerifyUserFn = (user: User, sent: User) => boolean;

// Definindo o tipo User
// Aqui o objeto é considerado tipo User se ele tiver as propriedades username e password do tipo string
type User = { username: string; password: string };

// Criando uma função co o tipo definido
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// Dois objetos diferente porém contém as mesmas propriedades exigidas pela função previamente definida
const bdUser = { username: 'Wesley', password: '123456' };
const sentUser = {
  username: 'Wesley',
  password: '123456',
  permission: 'Admin',
};

// Aplicando a função
// O tipé script vai aceitar o ebjeto pois eles contém as mesmas propriedade exigidas pela função
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn); // true
