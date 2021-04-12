type Callbackfn<U> = (value: U, index?: number, array?: U[]) => boolean;

// <T> - Tipo genérico
export function meuFilter<T>(array: T[], callbackfn: Callbackfn<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++)
    if (callbackfn(array[i])) novoArray.push(array[i]);

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a'];
const arrayFilter = array.filter((value) => value < 5);
console.log(arrayFilter);

const meuFiltro = meuFilter(array, (value) => value < 5);
console.log(meuFiltro);
