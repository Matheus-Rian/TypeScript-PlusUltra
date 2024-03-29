// Forma maior

export class Empresa {
  public readonly nome: string;
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
    for (const colaborador of this.colaboradores) [console.log(colaborador)];
  }
}

// Forma menor - Isso faz tudo da forma maior

export class Colaborador {
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
console.log(empresa1);
