interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>;

type MyOmit<T, K> = Omit<T, K>;
type lol = MyOmit<Todo, 'title' | 'description'>;

type MyReadonly<T, K> = Readonly<Pick<T, K>>;
type ok = MyReadonly<Todo, 'title' | 'description'>;

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK

export {};
