function alternatingCharacters(characters: string) {
  const arr = characters.split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
      arr.slice(i, 1);
    }
  }
  return count;
}

console.log(alternatingCharacters('AAAA'));
console.log(alternatingCharacters('BBBBB'));
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA'));
console.log(alternatingCharacters('AAABBB'));
