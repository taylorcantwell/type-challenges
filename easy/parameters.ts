const foo = (x: string, z: number): void => {};
type x = true;

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer K
) => any
  ? K
  : never;

//1) The type parameter extends a function signature to constrain the type passed in to be a function: <T extends (...args: any[]) => any>

//2) We use a conditional type (using extends in the assignment) to make use of the 'infer operator' : T extends (...args: infer K) => any ? K: never;

//3) If the type passed into T can be assigned to: (...args: infer K) => any, then the type of the arguments on the passed function signature type will be stored within K (using the infer keyword)

//4) The returned type will be an array containing the types of args passed into the function. It is an array because we are making use of the rest parameters: ...args" any[])

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

export {};
