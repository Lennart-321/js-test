let Person = {
  firstName: "",
  lastName: "",
  age: 0,
  fullName() {
    return `${this.firstName}-${this.lastName}`;
  },
};
function someFunc() {
  console.log(
    "Called someFunc, return:" + `(${this.lastName}:${this.firstName})`
  );
  this.someProp = "Some Value";
  return `(${this.lastName}:${this.firstName})`;
}
function Car(brnd, pow) {
  this.brand = brnd;
  this.power = pow;
}

console.log("Person.fullName.prototype:", Person.fullName.prototype);
console.log(
  "Person.fullName.hasOwnProperty(prototype):",
  Person.fullName.hasOwnProperty("property")
);
console.log(
  "someFunc.hasOwnProperty(prototype):",
  someFunc.hasOwnProperty("property")
);
console.log("Car.hasOwnProperty(prototype):", Car.hasOwnProperty("property"));

//let x = new Person.fullName();
let jim = { firstName: "Jim", lastName: "Cooper" };
let kim = { firstName: "Kim", lastName: "Andersson" };
Object.setPrototypeOf(jim, Person);

console.log(jim.fullName(), jim.__proto__);
console.log(jim.__proto__ === Object.getPrototypeOf(jim));
console.log(kim.__proto__ === Object);
console.log(kim.__proto__ === Object.getPrototypeOf(Object));
console.log(
  "kim.__proto__ === Object.__proto__.__proto__:",
  kim.__proto__ === Object.__proto__.__proto__
);
console.log(
  "kim.__proto__ === Object.prototype :",
  kim.__proto__ === Object.prototype
);
console.log(Object.__proto__);
console.log(Object.prototype);
console.log(Person.hasOwnProperty("fullName"));
console.log(jim.hasOwnProperty("lastName"));
console.log(Person.fullName.__proto__ === Object.__proto__);
let F = Person.fullName;

Person.fullName = someFunc;

console.log(Person.fullName.__proto__ === someFunc.__proto__);
console.log(Person.fullName.prototype === someFunc.prototype);
console.log(Person.fullName.prototype);
console.log(someFunc.prototype);

let x = new Person.fullName();
console.log("Return from 'new Person.fullName()':", x);
console.log(typeof x);
console.log(typeof someFunc);
console.log(x === someFunc.prototype);

let volvo = new Car("Volvo", 200);
console.log(volvo);
console.log(x);
console.log("Car.hasOwnProperty(prototype):", Car.hasOwnProperty("property"));

//let bim = new F();
