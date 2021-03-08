// Tipando o this na function

export function funcao(this: Date, argumento1: string): void {
  console.log(this);
  console.log(argumento1);
}

funcao.call(new Date(), 'Luiz');
funcao.apply(new Date(), ['Luiz']);
// funcao('Luiz') Daria erro pois o ts não consegue identificar o this
