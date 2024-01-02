//Function declaration:
function convertToLiters(gallons) {
  return gallons * 3.785;
}

//Function expression
let convertToLiters2 = function (gallons) {
  console.log(this);
  console.log(arguments);
  return gallons * 3.785;
};

//Arrow functions:
const convertToLiters3 = (gallons) => {
  console.log(this);
  //console.log(is arguments ? 0 : arguments);
  return gallons * 3.785;
};
const convertToLiters4 = (gallons) => (console.log(this), gallons * 3.785);

//'this' can not be set for Arrow functions
//Arrow functions can not be used as constructor functions
//Arrow functions have no 'arguments' object

//Creating function by using the Function constructor

const convertToLiters5 = /*new (optional)*/ Function(
  "gallons",
  "{return (console.log(this), gallons * 3.785);}"
);

//let f;
(function printDtTm() {
  let ht = document.getElementsByTagName("h1");
  //let ht = document.getElementById("header1");

  //console.log(ht);
  ht = ht[0];

  if (ht) ht.innerHTML += new Date().toLocaleString();

  //f = printDtTm;
})();
//f();

function sum1() {
  let sum = 0;
  //for (i = 0; i < arguments.length; i++) sum += arguments[i];
  let a = [...arguments];
  console.log(arguments, a);
  //arguments.forEach((x) => (sum += x));
  a.forEach((x) => (sum += x));
  return sum;
}
function sum2(a, b, ...n) {
  console.log(n);
  let sum = a + b;
  for (let i = 0; i < n.length; i++) sum += n[i];
  return sum;
}

const ob = {
  val: 19,
  v2: 5,
  get v() {
    return this.val;
  },
  set v(x) {
    this.val = x;
  },
};

class AClass {
  meth() {
    console.log("'this':", this);
  }
}
const ob2 = new AClass();
const fMeth = ob2.meth;
let arrow = () => {
  console.log("'this':", this);
};

// convertToLiters = 19;
// console.log(convertToLiters);
// console.log(convertToLiters2.call(2, 10));
// console.log(convertToLiters3.call(3, 10));
// console.log(convertToLiters4.call(4, 10));
// console.log(convertToLiters5.call(5, 10));
console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9));
ob.v += 2;
console.log(ob, ob.v);
ob2.meth.call(2);
fMeth.call(3);
arrow();
arrow.call(7);
console.log("/***** END *******/");
