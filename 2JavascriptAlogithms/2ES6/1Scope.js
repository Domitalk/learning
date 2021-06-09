
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



// destructuring instead of assigning one at a time 
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES



// destructuring into different names 
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES


// nested destructuring 
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST


// destructuring arrays 
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];

let a = 8, b = 6;
[b, a] = [a, b]

// using rest aka ... to pull out some parts like a slice 
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [, , ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// destructuring to pass props 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;


// template literals 
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.forEach((e) => {
    failureItems.push(`<li class="text-warning">${e}</li>`)
  })
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);