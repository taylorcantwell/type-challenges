type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

//1) If the type arg passed to T is of Promise type, then infer the inside of the promise.
//2) Recursively call the generic type to strip any additional layers of promise that wrap the underlying type.
//You're unwrapping T on each iteration, with that definition MyAwaited<Promise<Promise<number>>> gives you number
//3) If it's not a promise, return the type

type Result = MyAwaited<ExampleType>; // string

export {};
