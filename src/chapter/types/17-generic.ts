type numOrString = string | number;

function useState<S extends numOrString = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const state = useState<number>();
state.setState(123); // Funcione
console.log(state.getState());

// state.setState('oii'); // Dê erro
// console.log(state.getState());
