type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [] ? never : T[0];

//1) We constrain type T to being an array of any members
//2) Using a conditional type we must check if the array passed has members because any[] doesn't prevent an empty array type to be passed and the type returned will be undefined, rather than the preferable never.

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<[]>; // type is never
