/* eslint-disable */

// & - AND
type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };

type Person = hasName & hasLastName & hasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersection = AB & AC & AD;


const person: Person = {
    name: 'John',
    lastName: 'Smith',
    age: 30,
}

// Module mode
export { person }