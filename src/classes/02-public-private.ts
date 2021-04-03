/* Public - acessível dentro/fora da classe e em todas suas subclasses.
Podemos acessar em qualquer lugar, no qual a classe foi instacianda. */

// Private - Só é acessível dentro da classe que foi criado.(Encapsulamento)

export class Empresa {
  // ! Caso não seja declarado um modificador de acesso, por padrão será public.
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) console.log(colaborador);
  }
}

export class Colaborador {
  // Aqui eu preciso definir o modificador de acesso.
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Matheus', '121221');
const colaborador1 = new Colaborador('Rian', 'Souza');
const colaborador2 = new Colaborador('Silva', 'Matheus');
const colaborador3 = new Colaborador('Souza', 'Rian');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.mostrarColaboradores();
console.log(empresa1, empresa1.nome);
