// function getStandardAge() {
//   return this.name + this.age;
// }

function Person(name, age) {
  //let defaultAge = 35;
  this.name = name;
  this.age = age;

  //   this.standardAge = getStandardAge;
  //   this.incStandardAge = function () {
  //     defaultAge += 1;
  //   };
}
Person.prototype.nameAge = () => {
  return this.name + this.age;
};

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}
Object.setPrototypeOf(Student.prototype, Person.prototype);

let jim = new Student("Jim", 20, 5);
console.log(jim.constructor.toString());
console.log(jim instanceof Person);
console.log(jim instanceof Student);
console.log(jim instanceof Object);
//console.log(jim.hasOwnProperty(""));

// let jim = new Person("Jim");
// let criss = new Person("Criss");

// jim.incStandardAge();
// console.log(criss.standardAge());
// console.log(jim.standardAge());

// let bill = new Person("Bill");
// console.log(bill.standardAge());
