"use strict";

//#1
let name = ["John", "Doe"];

function generateUsername(name) {
  return name.join("_");
}

console.log(generateUsername(name));

//#2

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

function mergeArrays(arr1, arr2) {
  let resultArr = arr1.concat(arr2);
  let uniqArr = [...new Set(resultArr)];
  return uniqArr;
}

console.log(mergeArrays(arr1, arr2));

//#3

let arr3 = ["apple", "banana", "kiwi"];
let minLength = 5;
let result = [];

function filterStrings(arr, minLength) {
  for (let i = 0; i < arr.length; i++) {
    if (arr3[i].length >= minLength) {
      result.push(arr3[i]);
    }
  }
  return result;
}

console.log(filterStrings(arr3, minLength));

//#4

let arr4 = ["apple", "banana", "kiwi"];
let obj = {};
function arrayToObject(arr4) {
  for (let i = 0; i < arr4.length; i++) {
    obj[arr4[i]] = arr4[i].length;
  }
  return obj;
}

console.log(arrayToObject(arr4));

//#5

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Error! Division by zero."),
};

console.log(calculator.add(5, 3));
