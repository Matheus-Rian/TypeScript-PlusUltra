type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; // Pegando a tipagem da chave marca do type Veiculo
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'ford',
  year: 2020,
  name: 'Nome',
};

console.log(carro);
