
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

// do while allows for a single execution before it exits unlike normal while loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5)

// recursion 
// needs a base case that exits first 
// then calls itself with a difference so it doesn't go on forever
function sum(arr, n) {
    if (n <= 0) {
      return 0 
    } else {
      return sum(arr, n - 1) + arr[n -1]
    }
}


// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// looking up something from a pseudo database
function lookUpProfile(name, prop){
    let indexOf = -1
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == name) {
            indexOf = i
        }
    }

    if (indexOf >= 0) {
        return !!contacts[indexOf][prop] ? contacts[indexOf][prop] : "No such property" 
    } else {
        return "No such contact"
    }
}
lookUpProfile("Akira", "likes");