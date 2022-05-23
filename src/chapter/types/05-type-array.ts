// Tipagem array: Array<T> or T[]

// ...args - Três pontinhos = rest
export function multiplicationArgs(...args: Array<number>): number {
  return args.reduce((acumulator, value) => acumulator * value, 1);
}

const result = multiplicationArgs(1, 2, 3);

console.log(result);

export function concatArgs(...args: string[]): string {
  return args.reduce((acumulator, value) => acumulator + value);
}

const concatingString = concatArgs('a', 'b');

console.log(concatingString);

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const upperCaseStrings = toUpperCase('a', 'b');

console.log(upperCaseStrings);
