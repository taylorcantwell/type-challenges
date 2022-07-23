type If<C extends boolean, T, F> = C extends true
  ? T
  : C extends false
  ? F
  : never;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'
