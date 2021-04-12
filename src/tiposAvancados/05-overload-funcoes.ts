// Overload no ts só é permitido nos tipos;
// Baseado nos params que a func receber vou fazer ela funcionar de formas diferentes;

type Adder = {
  // Tipos de overloads
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((soma, valor) => soma + valor, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 2));
// adder(1, 2, [1, 2, 3]);
