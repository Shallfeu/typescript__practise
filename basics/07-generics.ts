// Really cool thing, i will learn it

function generic<Type>(arg: Type): Type {
  return [] as Type;
}

generic<string>('string');

function generic1<argType, resType>(arg: argType): resType {
  return [] as resType;
}

const res = generic1<string, number[]>('afd');

// generics with interfaces
interface Test<T> {
  type: T;
  name: string;
}

const obj1: Test<string> = {
  type: 'string',
  name: 'string',
};

const obj2: Test<number> = {
  type: 1,
  name: 'string',
};

// Generics with classes
class MySuperClass<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

const MyClass1 = new MySuperClass<number>(123);
const MyClass2 = new MySuperClass<string>('string');
