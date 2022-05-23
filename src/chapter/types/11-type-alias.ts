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

const person2: Person = {
  name: 'Annabelle',
  age: 12,
  salary: 100000,
};

export function setColorFavority(person: Person, color: ColorFavority): Person {
  return { ...person, colorFavority: color };
}

console.log(setColorFavority(person2, 'Green'));
console.log(person2);
