// // Literal types
// let loading: 'pending' | 'fulfilled' | 'rejected' = 'pending';

// loading = 'fulfilled';

// // Enums

// function setEnv1(
//   currentEnv: 'development' | 'stanging' | 'production',
// ): 'development' | 'stanging' | 'production' {
//   return currentEnv;
// }

// const enum Enviroment {
//   Development = 'development',
//   Stanging = 'stanging',
//   Production = 'production',
// }

// function setEnv2(currentEnv: Enviroment): Enviroment {
//   return currentEnv;
// }

// // type
// type Env = 'development' | 'stanging' | 'production';

// function setEnv3(currentEnv: Env): Env {
//   return currentEnv;
// }

// // Unions & intersections

// type myType1 =
//   | {
//       name: number;
//       title: string;
//     }
//   | { name: number; count: number };

// const myVar: myType1 = { name: 1, count: 2 };
// const myVar2: myType1 = { name: 1, title: '2' };

// type myType2 =
//   | {
//       name: number;
//       title: string;
//     } & { name: number; count: number };

// const myVar3: myType2 = { name: 1, title: '2', count: 3 };
