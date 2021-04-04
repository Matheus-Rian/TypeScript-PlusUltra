/* Public - acessível dentro/fora da classe e em todas suas subclasses.
Podemos acessar em qualquer lugar, no qual a classe foi instacianda. */

// Private - Só é acessível dentro da classe que foi criado.(Encapsulamento)

// Protected - Pode ser acessado dentro da class mãe e dentro das classes filhas.

export class Empresa {
  // *  Caso não seja declarado um modificador de acesso, por padrão será public.
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '111.111.111/11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  // Aqui eu preciso definir o modificador de acesso.
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Rian', 'Souza');
const colaborador2 = new Colaborador('Silva', 'Matheus');
const colaborador3 = new Colaborador('Souza', 'Rian');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.mostrarColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1, empresa1.nome);
