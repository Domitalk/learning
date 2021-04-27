
// var allows you to overwrite a previous var declaration 
// let will throw an error if you try 
let catName;
let quote;
function catTalk() {
    // this enables strict mode, which catches common coding mistakes 
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// with let we have a super narrow scope of inside the (if) statement 
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

// const are mutable but not reassignable 
const s = [5, 7, 2];
function editInPlace() {
  s.unshift(s.pop(2))
}
editInPlace();
//  [2, 5, 7]

// freeze will make it unmutable 
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS)
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// convert a old school function into an arrow func 
var magic = function() {
  return new Date();
};
const magic = () => {
  return new Date()
}

// arrow func with args 
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2)
}

// default values 
const increment = (number, value) => number + value;

const increment = (number, value = 1) => {
  return number + value 
}

// rest args ...args is an array of how many ever args there are 
const sum = (...args) => {
  return args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue 
  }, 0)
  // const args = [x, y, z];
  // return args.reduce((a, b) => a + b, 0);
}

// spread operators unpack arrays 
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  
console.log(arr2);