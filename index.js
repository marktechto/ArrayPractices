"use strict";

/*let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(1, 2));
console.log([...arr]);
console.log(arr.splice(1, 2));
console.log([...arr]);
let ar = ["f", "g", "h", "i", "j"];
console.log(ar.reverse());
console.log(ar);
//ቾconcat
const letter = arr.concat(ar);
console.log(letter);
// Join
console.log([letter.join(":")]);
*/
// const numbers = [23, 45, 78];
// console.log(numbers.at(0));
// const name = "markos";
// const firstLetter = name.at(0);
// console.log(firstLetter);
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement${i + 1} You Deposited ${mov} dollar  `);
  } else {
    console.log(`Movement${i + 1} You WithDrew ${Math.abs(mov)} dollar`);
  }
}

console.log("--------------------ForEach -------------");
const movementes = [200, 450, -400, 3000, -650, -130, 70, 1300];
movementes.forEach(function (mov, index, array) {
  if (mov > 0) {
    console.log(`Movement${i + 1} You Deposited ${mov} dollar  `);
  } else {
    console.log(`Movement${i + 1} You WithDrew ${Math.abs(mov)} dollar`);
  }
});
*/
// const currencies = new Map([
//   ["USD", "Unites States Dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pouns Sterling"],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// const currencieUnique = new Set(["USD", "Pound", "Euro"]);
// console.log(currencieUnique);
// currencieUnique.forEach(function (value, key) {
//   console.log(`${key}:${value}`);
// });

// juliasDogAgeData.forEach(function (age, i) {
//   age >= 3 ? "A Dog is an adult" : "its Still pupppy";
// });
// kateDogAgeData.forEach(function (age, i) {
//   age >= 3 ? "A Dog is an adult" : "its Still pupppy";
// });
// // 2
// const checkDogs = function (dogsJulia, dogsKate) {
//   const julias = dogsJulia.splice(1, 2);
//   //console.log(julias);
//   const bothDog = dogsKate.concat(julias);
//   console.log(`The Resulted Array is ${bothDog}`);
//   bothDog.forEach(function (age, i) {
//     age >= 3
//       ? console.log(` Dog Number ${i + 1} is an adult and is ${age} years old`)
//       : console.log(
//           `Dog Number ${i + 1} is  still a Puppy and is ${age} years old`
//         );
//   });
// };

// checkDogs(juliasDogAgeData, kateDogAgeData);
const calcAverageHumanAge = function (ages) {
  console.log(` original Array${ages}`);
  const humanAge = ages
    .map((value, i) => (value > 2 ? value * 4 + 16 : 2 * value))
    .filter((age, i) => age >= 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);

  console.log(`the whole value is ${humanAge}`);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// ********The Three BEST WELL KNOWN ARRAY //METHOD*************************
// unlike the foreach method the map method give //the brand new array method
