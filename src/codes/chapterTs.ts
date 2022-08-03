// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-inferrable-types */
// // String, number e boolean

// const nomeExample: string = 'Matheus';
// const numExample: number = 19;
// const boolExample: boolean = true;

// // arrays
// const arrayExample: number[] = [1, 2];
// const arrayExample2: Array<number> = [1, 2];

// // Tupla
// const tuplaExample: [string, number] = ['Mathues', 19];

// // object
// const objExample: objModel = {
//   name: 'Matheus',
//   age: 19,
// };

// const objExample2: objModel = {
//   name: 'Matheus',
//   age: 19,
// };

// const objExample3: objInterfaceModel = {
//   name: 'Matheus',
//   age: 19,
// };

// // Function
// function welcomeExample(name: string): void {
//   console.log(name);
// }

// // Type assertions
// // <input id="myInp" type="text">
// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const myInputEx = document.getElementById('myInp')! as HTMLInputElement;
// console.log(myInputEx.value);

// // Type Union (| - ou) ||
// const unionTypeEx: number | string = 19;

// // Types Intersection (& - e)
type hasNameEx = { name: string };
type hasAge = { age: number };

type Person = hasNameEx & hasAge;

// const person: Person = {
//   name: 'Matheus',
//   age: 19,
// };

// // Type Alias
// type objModel = {
//   name: string;
//   age: number;
//   listFriends?: string[];
//   welcome?: (name: string) => string;
// };

// // Interface
// interface objInterfaceModel {
//   name: string;
//   age: number;
//   listFriends?: string[];
//   welcome?: (name: string) => string;
// }

// Generic

// S -> State
// K - Key
// E -> Element
// T -> Type

function useStateEx<S>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const stateEx = useStateEx<Person>();
// stateEx.setState(123);
stateEx.setState({
  age: 19,
  name: 'Matheus',
});

console.log(stateEx.getState());

// stateEx.setState('str');
console.log(stateEx.getState());

// stateEx.setState(true);
// console.log(stateEx.getState());
