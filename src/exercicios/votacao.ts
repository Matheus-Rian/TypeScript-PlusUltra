// Criar um sistema de votação
interface candidate {
  name: string;
  qtndVotes: number;
}

abstract class Voting {
  constructor(public names: candidate[]) {}
  abstract processVoting(vote: string): void;
}

class Linguagens extends Voting {
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
const matheus = new Linguagens(ling);
matheus.processVoting('Java');
console.log(matheus);
