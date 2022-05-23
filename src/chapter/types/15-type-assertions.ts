/* eslint-disable */
// <input id="myInp" type="text">
const myInput = document.getElementById("myInp")! as HTMLInputElement;
console.log(myInput.value);
// // * Recomendado

// // Conditional
// const body1 = document.querySelector('body');
// if (body1) body1.style.background = 'red';

// // Type assertion
// const body3 = document.querySelector('body') as HTMLBodyElement;
// body3.style.background = 'red';

// // HTMLElement
// const input = document.querySelector('.input') as HTMLInputElement;
// input.value = 'Qualquer coisa';
// input.focus();

// // ! Não Recomendado

// // Non-null assertion (!)
// const body2 = document.querySelector('body')!;
// body2.style.background = 'red';

// // Type assertion
// const body4 = (document.querySelector('body') as unknown) as number;

function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;

console.log(typeof netPrice);
