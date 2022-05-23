/* eslint-disable @typescript-eslint/no-unused-vars */
// Union-types - |(ou)
// string | number | boolean - A var pode ser desses três tipos

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(2, 3));
console.log(addOrConcat('2', '3'));

let unionType: string | number = '12';
unionType = 12;
