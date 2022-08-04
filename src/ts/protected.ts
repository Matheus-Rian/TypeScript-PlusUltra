type ICollaborator = {
  name: string;
  age: number;
};

export class Enterprise {
  readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  setCollaborator(collaborator: ICollaborator) {
    this.collaborators.push(collaborator);
  }

  getCollaborators() {
    console.log(this.collaborators);
  }

  showCollaborators() {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Udemy extends Enterprise {
  constructor() {
    super('Udemy', '111');
  }

  popCollaborator(): ICollaborator | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;

    return null;
  }
}

export class Collaborator {
  constructor(readonly name: string, readonly age: number) {}
}

const enterprise = new Udemy();
const matheus = new Collaborator('Matheus', 19);
const Rodri = new Collaborator('Rodri', 17);
enterprise.setCollaborator(matheus);
enterprise.setCollaborator(Rodri);
enterprise.showCollaborators();
console.log(enterprise.popCollaborator());
