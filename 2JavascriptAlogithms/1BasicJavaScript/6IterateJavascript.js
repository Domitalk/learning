
// while loops 
var myArray = [];
let i = 5
while (i > -1) {
  myArray.push(i)
  i--
}

// for loops
var myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i)
}

// for loop with a different incrementation 
var myArray = [];
for (let i = 1; i <= 9; i += 2) {
  myArray.push(i)
}

// increment backwards every other
var myArray = [];
for (let i = 9; i > 0; i -=2) {
  myArray.push(i)
}

// iterate through array 
var myArr = [ 2, 3, 4, 5, 6];
let total = 0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

// nested array iteration 
function multiplyAll(arr) {
    var product = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          product *= arr[i][j]
      }
    }
    return product;
  }
  multiplyAll([[1,2],[3,4],[5,6,7]]);