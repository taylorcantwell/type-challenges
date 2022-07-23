interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};

//1) Loop over T, if the key is assignable to the union, then never will be the type for the property which removes it entirely form the object type.
