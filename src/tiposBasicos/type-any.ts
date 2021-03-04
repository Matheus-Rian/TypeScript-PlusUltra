/* eslint-disable */

// Any - Qualquer coisa/Sem Tipagem
// Utilize any em ultimo caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Óla'));
console.log(showMessage(1));
console.log(showMessage([1, 2, 3]));
