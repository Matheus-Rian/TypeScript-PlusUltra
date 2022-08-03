export class Person {
  constructor(
    public name: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }
}

export class Student extends Person {
  getCpf(): string {
    return 'this is Student ' + this.cpf;
  }
}

export class Client extends Person {
  getCpf(): string {
    return 'this is Client ' + this.cpf;
  }
}

const student = new Student('Matheus', 19, '111.111.111-11');
const person = new Person('Rian', 19, '111.111.111-11');
const client = new Client('Souza', 19, '111.111.111-11');

console.log(student.getCpf(), person, client);
