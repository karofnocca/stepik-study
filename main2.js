"use strict";

// alg #1
var num = [13, 345, 1, 234, 23, 2, 3, 6, 5, 4567, 32, 45, 5, 43, 10];
var target = 5;

function finalSum(num, target) {
  for (var i = 0; i < num.length; i++) {
    for (var j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [num[i], num[j]];
      }
    }
  }
  return null;
}

console.log(finalSum(num, target));

//alg #2 if we need find count of any letter

var row = "Hello Michael, chek my hw pls";
var letter = "h";

function countH(row) {
  if (typeof row !== "string" && !Array.isArray(row)) {
    return "Это не массив и не строка";
  }
  if (Array.isArray(row)) {
    for (var i = 0; i < row.length; i++) {
      var str = row[i];
      if (str.trim() === "") {
        return "Введена пустая строка";
      }
    }
  } else {
    if (row.trim() === "") {
      return "Введена пустая строка";
    }
  }
  var count = 0;
  if (Array.isArray(row)) {
    for (var i = 0; i < row.length; i++) {
      var str = row[i];
      for (var j = 0; j < str.length; j++) {
        if (str[j].toLowerCase() === letter) {
          count++;
        }
      }
    }
  } else {
    for (var i = 0; i < row.length; i++) {
      if (row[i].toLowerCase() === letter) {
        count++;
      }
    }
  }
  return count;
}

console.log(countH(row));

//alg #2 if we need find count of "space"

var string = ["Hello my friend! How're you! I am fine, thx"];

function countH(string) {
  var count = 0;
  for (var str of string) {
    for (var char of str) {
      if (char === " ") {
        count++;
      }
    }
  }
  return count;
}

console.log(countH(string));

// alg #3

var arr = [1, 2, 3, 5, 6, 7, 8];

function getArrayLength(arr) {
  var count = 0;
  while (count < arr.length) {
    count++;
  }
  return count;
}
console.log(getArrayLength(arr));
