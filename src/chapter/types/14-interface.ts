/* eslint-disable prettier/prettier */

interface User {
  name: string;
  age: number;
}

function welcome(user: User) {
  console.log(`Bem vindo, ${user.name}. Você tem ${user.age} anos!`);
}

welcome({name: 'Matheus', age: 19});



interface Movie {
  title: string,
}

interface Movie {
  description: string,
}

const movie: Movie = {
  title: 'Title Example',
  description: 'lorem ipsum',
}
