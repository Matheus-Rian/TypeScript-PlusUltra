// Criar um sistema de votação
interface candidate {
  name: string;
  qtndVotes: number;
}

class Voting {
  constructor(public names: candidate[]) {}
  processVoting(vote: string): void {
    this.names.forEach((candidate) => {
      if (candidate.name === vote) candidate.qtndVotes++;
    });
  }
}

const ling: candidate[] = [
  {
    name: 'JavaScript',
    qtndVotes: 0,
  },
  {
    name: 'TypeScript',
    qtndVotes: 0,
  },
  {
    name: 'Java',
    qtndVotes: 0,
  },
];
const votation = new Voting(ling);
votation.processVoting('Java');

// Solução do Professor

type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation('Qual a sua cor favorita?');
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Amarelo', numberOfVotes: 0 });
votation2.vote(0);
votation2.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);
votationApp.showVotations();

export default 1;
