"use strict";

// alg #1
// var num = [13, 345, 1, 234, 23, 2, 3, 6, 5, 4567, 32, 45, 5, 43, 10];
// const target = 5;

// function finalSum(num, target) {
//   const seenNumbers = new Set();
//   for (let number of num) {
//     const secondNum = target - number;
//     if (seenNumbers.has(secondNum)) {
//       return [secondNum, number];
//     }
//     seenNumbers.add(number);
//   }
//   return null;
// }

// finalSum(num, target);

//alg #2 if we need find count of "h"

var string = ["Hello my friend! How're you! I am fine, thx"];

function countH(string) {
  let count = 0;
  for (let str of string) {
    for (let char of str) {
      if (char.toLowerCase() === "h") {
        count++;
      }
    }
  }
  return count;
}

//alg #2 if we need find count of "space"

var string = ["Hello my friend! How're you! I am fine, thx"];

function countH(string) {
  let count = 0;
  for (let str of string) {
    for (let char of str) {
      if (char.toLowerCase() === " ") {
        count++;
      }
    }
  }
  return count;
}

// alg #3

// var arr = [1, 2, 3, 5, 6, 7, 8];

// function getArrayLength(arr) {
//   let count = 0;
//   for (let index in arr) {
//     count++;
//   }
// }
// getArrayLength(arr);
