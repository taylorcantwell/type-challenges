type Includes<T extends unknown[], K> = K extends T[keyof T] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // expected to be `false`

//1) x is a tuple type
type x = ['lol', 'two'];

//2) Get the key names of the tuple as a union.
// This includes key names of the tuple, including inbuilt key names such as "length"
type keys = keyof x;

//3) Grab the types of the members of the properties on the tuple as a union.
// This includes inbuilt members such as the type of array.length etc
// This essentially loops over the tuple type and uses keys to access the member types
type y = x[keys];

//4) Check if the string literal type "two" can be assigned to type y
type c = 'two' extends y ? true : false;
