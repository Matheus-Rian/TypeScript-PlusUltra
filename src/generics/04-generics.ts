// Restrições em genéricos(constraints).

type ObterChavefn = <O, K extends keyof O>(objeto: O, chaves: K) => O[K];
// * K - É no máximo(Restrição) uma chave de O

// Function expression
const obterChaves: ObterChavefn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChaves(animal, 'vacinas');
const cor = obterChaves(animal, 'cor');
console.log(vacinas, cor, obterChaves(animal, 'idade'));
