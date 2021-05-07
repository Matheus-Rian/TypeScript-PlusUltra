/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNomeSpace {
  export const nomeDoNameSpace = 'Luiz';

  export class PessoaDoNameSpace {
    constructor(public name: string) {}
  }

  const pessoaDoNameSpace = new PessoaDoNameSpace('Matheus');
  console.log(pessoaDoNameSpace);

  export namespace OutroNameSpace {
    export const nomeDoNameSpace = 'Rian';
  }
}

const pessoaDoNameSpace = new MeuNomeSpace.PessoaDoNameSpace('Matheus');
console.log(pessoaDoNameSpace);
console.log(MeuNomeSpace.nomeDoNameSpace);
console.log(MeuNomeSpace.OutroNameSpace.nomeDoNameSpace);
