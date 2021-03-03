// Tuple: [T, T, T...]

const cats: readonly [number, string] = [2, 'nina'];
const dogs: [number, string, ...string[]] = [
  3,
  'dog',
  'dogzinnho',
  'cachorro',
  'cachorro',
  'cachorro',
];

// cats[0] = 3 Não consigo alterar pois é readonly(Apenas Leitura)
console.log(dogs, cats);

// Readonly array
const array: ReadonlyArray<string> = ['Matheus', 'Rian'];
const array1: readonly string[] = ['Matheus', 'Rian'];

console.log(array, array1);
