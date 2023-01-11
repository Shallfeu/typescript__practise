// interface IUser {
//   name: string;
//   surname: string;
//   printFullname(): void;
// }

// class User implements IUser {
//   name: string;
//   surname: string;
//   fullname: string = '23.01';
//   // private public protected
//   constructor(props: { name: string; surname: string }) {
//     this.name = props.name;
//     this.surname = props.surname;
//   }

//   printFullname() {
//     console.log(this.name + this.surname);
//   }
// }

// class Customer extends User {
//   bill: number;
//   constructor(props: { name: string; surname: string; bill: number }) {
//     super(props);
//     this.bill = props.bill;
//   }
// }

// const customer = new Customer({
//   name: 'shal',
//   surname: 'feu',
//   bill: 45,
// });
