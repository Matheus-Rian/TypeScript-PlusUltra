const arr = [1, 2, 3];

arr.forEach((el) => console.log(el));

console.log('-----------');

const arrMap = arr.map((el) => el + 2);
console.log(arrMap);

console.log('-----------');

const arrFilter = arr.filter((el) => el > 1);
console.log(arrFilter);
