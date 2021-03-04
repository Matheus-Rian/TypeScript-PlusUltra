/* eslint-disable */

// Tipagem-estruturada
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
}

const bdUser = {username: 'Matheus', password: '1234'};
const sentUser = {username: 'Matheus', password: '1234', permissions: ''}; 
// Consigo passar permissions, pois o ts só se preocupa com as regras que devem ser cumpridas, caso elas sejam, podem ser add outras xoisas
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
