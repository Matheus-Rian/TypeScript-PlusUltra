// Encadeamento opcional(?) e operador de coalescência nula(??)
// Nenhum/não valor - null e undefined
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Kimetsu no yaiba',
  texto: 'Oi',
  //   data: new Date(),
};

// O (??) verifica se o valor é undefined ou null. Caso seja ele executára o comando depois do ??
// Que nesse caso é o 'Não existe data'.
console.log(documento.data?.toDateString() ?? 'Não existe data');
console.log(undefined ?? 'Não tem valor');
console.log(null ?? 'Não tem valor');
console.log(false ?? 'Tem valor');
console.log(0 ?? 'Tem valor');
console.log('' ?? 'Tem valor');
