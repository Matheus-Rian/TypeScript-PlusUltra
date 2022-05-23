/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
interface Todo {
  title: string;
}

const todoVar: Readonly<Todo> = {
  title: 'Title Example'
};

// todoVar.title = 'NewTitle';

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  // description: 'throw out trash',
});

console.log(todo2);

function welcome(name: any) {
  return 'Olá';
}

console.log(welcome(2))
