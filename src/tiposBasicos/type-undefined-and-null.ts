//undefined

let x; //Undefined - Foi declarado, mas não foi inicializado.
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function person(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string } {
  return {
    firstName,
    lastName,
  };
}

// null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const result = squareOf('2');

if (result === null) {
  console.log('Conta inválida');
} else {
  result * 2;
}
