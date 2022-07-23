type MyPick<T extends object, U extends keyof T> = {
  [K in U]: T[U];
};

//******/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

export {};
