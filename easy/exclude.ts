type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

//1) When conditional types act on a generic type, they become distributive when given a union type. Therefore, MyExclude distributes on: 'a' | 'b' | 'c', 'a' which is effectively: MyExclude<'a', 'u'> | MyExclude<'b', 'u'> | MyExclude<'c', 'u'>

//2) In the iterations where the type params passed are assignable to each other, the result is never.

//3) Once the iterations are complete the union will equal result as : never | b | c, and the never type in unions is STRIPPED away as it never existed which only leaves behind a union of b | c.
