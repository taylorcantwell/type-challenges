type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]

export {};

//1) Using the spread technique similar to javascript, we can spread the types inside an array into other arrays.

//2) Simply taking two array types and spreading each as members of an array type.
