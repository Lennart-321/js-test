// function greeting() {
//   console.log("Hello!");
//   console.log(this);
//   this.num = 12;
// }

// //greeting = 5;
// // console.log(greeting);
// // console.log(greeting());

// const obj = {
//   num: 7,
//   num2: 8,
//   f1: greeting,
//   f2: function () {
//     console.log(this);
//     console.log(this.num);
//   },
// };

// let f = obj.f2;
// f();
// obj.f2();
// console.log(new obj.f2());

// // let x = new obj.f1();
// // console.log(x.num);
// console.log(x.num2);

// function spinWords(string) {
//   //TODO Have fun :)
//   let result = "";
//   const words = string.split(" ");
//   words.forEach((w) => {
//     if (w.length >= 5) {
//       w = w.split("");
//       w.reverse();
//       console.log(w);
//       w = w.join("");
//       console.log(w);
//     }
//     console.log(result.length);
//     result += `${result.length > 0 ? " " : ""}${w}`;
//   });
//   console.log(result);
//   return result;
// }

// console.log(spinWords("Welcome") === "emocleW");
// console.log(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");

//console.log("Dermatoglyphics".charCodeAt(0));
// "Dermatoglyphics".forEach((a) => {
//   console.log(a.charCodeAt(0));
// });

// function isIsogram(string) {
//   const counter = [];
//   string = string.toUpperCase();
//   for (i = 0; i < string.length; i++) {
//     const code = string.charCodeAt(i);
//     if (counter[code] === 1) return false;
//     counter[code] = 1;
//   }
//   return true;
// }
// console.log(isIsogram("Dermatoglyphics") === true);
// console.log(isIsogram("Dermatoglyphicds") === true);

//console.log(Math.max(...[1, 2, 3]));

// function likes(names) {
//   switch (names.length) {
//     case 0: return "no one likes this";
//     case 1: return `${names[0]} likes this`;
//     case 2: return `${names[0]} and ${names[1]} like this`;
//     case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
//  }
// }

// function likes(names) {
//   let res;
//   const len = names.length;
//   switch (len){
//       case 0: return "no one likes this";
//       case 1:
//       case 2:
//       case 3:
//         res = names[0];
//         if (len ===  1)
//           return res + " likes this";
//         if (len === 3)
//           res += ", "
//         return res + names.slice(-2).join(" and ") + "like this"

//       default:
//         return (names.length === 3?) + names.slice(-2).join(" and ") + "like this"
//   }
// }

// function likes(names) {
//   const l = names.length;

//   let start = l === 0 ? "no one" : names[0];
//   if (l >= 2) {
//     start += l === 2 ? " and" : ",";
//   }

//   let mid = l > 3 ?
//       (l-2).toString() + " others" :
//       (l > 1 ? names[l-1] : "");

//   return start + mid + " like" + (l < 3?"s":"") + " this";
// }

// function likes(names) {
//   const l = names.length;

//   for (i = 0; i < 3 && i < l) {
//     if (i > 0) {
//       if (i === 2 && l >= 4)
//         break;
//       res += i === 1 && l === 2 || i === 2  ? " and " : ", ";
//     }
//     res += names[i]
//   }

//   let start = l === 0 ? "no one" : names[0];
//   if (l >= 2) {
//     start += l === 2 ? " and" : ",";
//   }

//   let mid = l > 3 ?
//       (l-2).toString() + " others" :
//       (l > 1 ? names[l-1] : "");

//   return start + mid + " like" + (l < 3?"s":"") + " this";
// }

// function validatePIN(pin) {
//   return /^\d{4}(\d{2})?$/.test(pin);
// }
// console.log(validatePIN("1234"));

// let a1 = new Array(1, 2, 3);
// let a2 = Array(4, 1, 2, 3);
// let a3 = [5, 6, 7, 1, 2];
// let a4 = Array("abc");
// let a5 = Array(7);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a3[-2]);
// console.log(0 === -0);

// a5 = a5.slice(3);
// console.log(a5);

// a3[17] = "17";
// console.log(a3);

// a3.length = 10;
// console.log(a3);
// a3.length = 20;
// console.log(a3);
// console.log(a3[19]);

// for (let i = 0; i < a2.length; i++) {
//   if (i % 2 == 0) a2.push(i);
// }
// console.log(a2);

// for (let a of a2) {
//   a = 17;
//   console.log(a);
// }
// console.log(a2);

// let iii = 0;
// for (;;) {
//   console.log(a2[iii]);
//   if (iii++ > 5) break;
// }
// let str = "abcdef";
// let o = { m1: "Member 1", m2: 2 };
// iii = 0;
// for (let m in o) {
//   console.log(++iii, m);
// }

// const s1 = "abcd";
// s1 += "e";
// console.log(s1);
