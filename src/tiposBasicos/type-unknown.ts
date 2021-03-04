// Todos os outros tipos vem de unknown.
// Unknown é um any mais seguro, pois ele vai obrigar o dev a fazer uma checagem de tipo antes de fazer uma operacao com a var.
let x: unknown;

x = 10;
x = '10';

const y = 10;

if (typeof x === 'number') console.log(x + y);
