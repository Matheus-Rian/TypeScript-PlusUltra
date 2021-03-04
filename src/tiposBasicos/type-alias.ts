// type - contract

type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  colorFavority?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Black' | 'Cyan' | 'Magenta' | 'Yellow';
type ColorFavority = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Matheus',
  age: 18,
  salary: 3_300, //3300
};

export function setColorFavority(person: Person, color: ColorFavority): Person {
  return { ...person, colorFavority: color };
}

console.log(setColorFavority(person, 'Green'));
console.log(person);
