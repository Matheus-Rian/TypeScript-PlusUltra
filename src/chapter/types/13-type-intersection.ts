/* eslint-disable */

// & - AND
type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };

type Person = hasName & hasLastName & hasAge;

const person: Person = {
  age: 19,
  lastName: 'Matheus',
  name: 'Rian',
}

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersection = AB & AC & AD;



// Module mode
export { person }
