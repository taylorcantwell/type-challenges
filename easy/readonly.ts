type MyReadonly<T extends {}> = {
  readonly [K in keyof T]: T[K];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property

export {};

//1)Assuming TODO is passed into the generic. Grab the property keys as a union from the object type: "title" | "description"
type keys = keyof Todo;

//2) Loop over the property keys by using K in keys to create the following type:
//type propertyNames = {
//  title: any;
//  description: any;
//}
type propertyNames = { [K in keys] };

//3) To add a type to the members instead of any, we can grab the member types of the Todo type on each loop by using an indexed access type to look up a specific property on another type. Todo[K] is the same principle as accessing an object with bracket notation. This creates this type:
//type completeType = {
//  title: string;
//  description: string;
//}

type completeType = { [K in keys]: Todo[K] };

//4) Now that we've recreated the type up to this point, we can add modifiers to it.

type readOnlyCompleteType = { readonly [K in keys]: Todo[K] };

//5) This construct then can be made reusable by creating a "mapped generic type" which is a mapped type that accepts a generic:

type MappedGeneric<T extends {}> = {
  readonly [K in keyof T]: T[K];
};
