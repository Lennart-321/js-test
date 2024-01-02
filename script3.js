class Person {
  name;
  static #prefix = "Bg-";
  constructor(name) {
    this.name = name;
  }
  bigName() {
    return this.#prefix + this.name;
  }
  get gname() {
    return this.name;
  }
  set gname(n) {
    this.name = n;
  }
}

let jim = new Person("Jim");
console.log(jim.bigName());
jim.gname = "Jimmy";
console.log(jim.gname);
console.log(typeof Person);
